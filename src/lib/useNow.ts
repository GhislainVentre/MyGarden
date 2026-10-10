import { useEffect, useState } from 'react';
import { AppState } from 'react-native';

/**
 * Date courante, rafraîchie quand l'app revient au premier plan et à chaque
 * minute : les échéances d'arrosage restent justes si l'app reste ouverte
 * d'un jour à l'autre.
 */
export function useNow(): Date {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (state) => {
      if (state === 'active') setNow(new Date());
    });
    const timer = setInterval(() => setNow(new Date()), 60_000);
    return () => {
      subscription.remove();
      clearInterval(timer);
    };
  }, []);
  return now;
}
