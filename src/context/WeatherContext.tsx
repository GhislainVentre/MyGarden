import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { AppState } from 'react-native';

import { useNow } from '../lib/useNow';
import {
  coldestNight,
  forecastUrl,
  geocodingUrl,
  isFresh,
  makePlace,
  parseForecast,
  parseGeocoding,
  type ColdNight,
  type Forecast,
  type WeatherPlace,
} from '../lib/weather';

const PLACE_KEY = 'mygarden:weather:place:v1';
const FORECAST_KEY = 'mygarden:weather:forecast:v1';

interface WeatherContextValue {
  place: WeatherPlace | null;
  /** Nuit la plus froide des prochaines 48 h, ou null sans météo. */
  night: ColdNight | null;
  loading: boolean;
  /** Dernière erreur de chargement, en français. */
  error: string | null;
  /** Suit la météo de la position de l'appareil ; renvoie un message d'erreur ou null. */
  locateMe: () => Promise<string | null>;
  /** Suit la météo d'une ville ; renvoie un message d'erreur ou null. */
  chooseCity: (name: string) => Promise<string | null>;
  forget: () => void;
}

const WeatherContext = createContext<WeatherContextValue | null>(null);

async function readJson<T>(key: string): Promise<T | null> {
  try {
    const raw = await AsyncStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

async function fetchJson(url: string): Promise<unknown> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

export function WeatherProvider({ children }: { children: ReactNode }) {
  const now = useNow();
  const [place, setPlace] = useState<WeatherPlace | null>(null);
  const [forecast, setForecast] = useState<Forecast | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const state = useRef({ place: null as WeatherPlace | null, forecast: null as Forecast | null, inFlight: false });

  const load = useCallback(async (target: WeatherPlace, force = false) => {
    if (state.current.inFlight) return;
    if (!force && isFresh(state.current.forecast, target)) return;
    state.current.inFlight = true;
    setLoading(true);
    try {
      const next = parseForecast(await fetchJson(forecastUrl(target)), target);
      if (!next) throw new Error('Réponse inattendue');
      state.current.forecast = next;
      setForecast(next);
      setError(null);
      await AsyncStorage.setItem(FORECAST_KEY, JSON.stringify(next)).catch(() => {});
    } catch {
      setError('Météo indisponible pour le moment (pas de connexion ?).');
    } finally {
      state.current.inFlight = false;
      setLoading(false);
    }
  }, []);

  // Lieu et dernières prévisions gardés sur l'appareil, puis rafraîchis.
  useEffect(() => {
    let active = true;
    Promise.all([readJson<WeatherPlace>(PLACE_KEY), readJson<Forecast>(FORECAST_KEY)]).then(([savedPlace, savedForecast]) => {
      if (!active || !savedPlace) return;
      state.current.place = savedPlace;
      state.current.forecast = savedForecast;
      setPlace(savedPlace);
      setForecast(savedForecast);
      load(savedPlace);
    });
    const subscription = AppState.addEventListener('change', (appState) => {
      if (appState === 'active' && state.current.place) load(state.current.place);
    });
    return () => {
      active = false;
      subscription.remove();
    };
  }, [load]);

  const choose = useCallback(
    async (next: WeatherPlace) => {
      state.current.place = next;
      setPlace(next);
      await AsyncStorage.setItem(PLACE_KEY, JSON.stringify(next)).catch(() => {});
      await load(next, true);
    },
    [load],
  );

  const locateMe = useCallback(async () => {
    try {
      const permission = await Location.requestForegroundPermissionsAsync();
      if (!permission.granted) return 'Sans accès à la position, tapez plutôt le nom de votre ville.';
      const position =
        (await Location.getLastKnownPositionAsync()) ??
        (await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Low }));
      const { latitude, longitude } = position.coords;
      const address = await Location.reverseGeocodeAsync({ latitude, longitude })
        .then((results) => results[0])
        .catch(() => undefined);
      await choose(makePlace(latitude, longitude, address?.city ?? address?.subregion ?? ''));
      return null;
    } catch {
      return 'Position introuvable. Vérifiez que la localisation est activée, ou tapez le nom de votre ville.';
    }
  }, [choose]);

  const chooseCity = useCallback(
    async (name: string) => {
      if (!name.trim()) return 'Tapez le nom de votre ville.';
      try {
        const found = parseGeocoding(await fetchJson(geocodingUrl(name)));
        if (!found) return `Ville « ${name.trim()} » introuvable.`;
        await choose(found);
        return null;
      } catch {
        return 'Recherche impossible pour le moment (pas de connexion ?).';
      }
    },
    [choose],
  );

  const forget = useCallback(() => {
    state.current = { place: null, forecast: null, inFlight: state.current.inFlight };
    setPlace(null);
    setForecast(null);
    setError(null);
    AsyncStorage.multiRemove([PLACE_KEY, FORECAST_KEY]).catch(() => {});
  }, []);

  const night = useMemo(() => (place ? coldestNight(forecast, now) : null), [place, forecast, now]);

  const value = useMemo(
    () => ({ place, night, loading, error, locateMe, chooseCity, forget }),
    [place, night, loading, error, locateMe, chooseCity, forget],
  );

  return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
}

export function useWeather(): WeatherContextValue {
  const ctx = useContext(WeatherContext);
  if (!ctx) throw new Error('useWeather doit être utilisé dans un WeatherProvider');
  return ctx;
}
