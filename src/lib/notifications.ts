import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

import type { WateringReminder } from './reminders';

/** Canal Android dédié : importance basse, ni son ni vibration. Ses réglages sont figés à sa création. */
export const SILENT_CHANNEL_ID = 'arrosage-silencieux';

const supported = Platform.OS === 'android' || Platform.OS === 'ios';

if (supported) {
  // App ouverte : le rappel va dans le centre de notifications, sans bannière ni son.
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: false,
      shouldShowList: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
}

async function ensureSilentChannel() {
  if (Platform.OS !== 'android') return;
  await Notifications.setNotificationChannelAsync(SILENT_CHANNEL_ID, {
    name: 'Rappels d’arrosage',
    description: 'Rappels silencieux quand une plante doit être arrosée.',
    importance: Notifications.AndroidImportance.LOW,
    sound: null,
    enableVibrate: false,
    vibrationPattern: null,
    showBadge: false,
  });
}

/** Demande l'autorisation une seule fois ; renvoie false si l'utilisateur a refusé. */
async function ensurePermission(): Promise<boolean> {
  const current = await Notifications.getPermissionsAsync();
  if (current.granted) return true;
  if (!current.canAskAgain) return false;
  const asked = await Notifications.requestPermissionsAsync({
    ios: { allowAlert: true, allowBadge: false, allowSound: false },
  });
  return asked.granted;
}

/** Remplace les rappels programmés par ceux de la liste. */
export async function scheduleWateringReminders(reminders: WateringReminder[]): Promise<void> {
  if (!supported) return;
  await ensureSilentChannel();
  if (reminders.length > 0 && !(await ensurePermission())) return;
  await Notifications.cancelAllScheduledNotificationsAsync();
  for (const reminder of reminders) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: reminder.title,
        body: reminder.body,
        sound: false,
        interruptionLevel: 'passive',
        data: { plantIds: reminder.plantIds },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DATE,
        date: reminder.date,
        channelId: SILENT_CHANNEL_ID,
      },
    });
  }
}

/** Ouvre la plante concernée quand on touche un rappel. */
export function onReminderOpened(open: (plantIds: string[]) => void): () => void {
  if (!supported) return () => {};
  let lastHandled: string | null = null;
  const handle = (response: Notifications.NotificationResponse | null) => {
    const key = response ? `${response.notification.request.identifier}:${response.notification.date}` : null;
    if (!key || key === lastHandled) return;
    lastHandled = key;
    const ids = response?.notification.request.content.data?.plantIds;
    if (Array.isArray(ids)) open(ids.filter((id): id is string => typeof id === 'string'));
  };
  // Rappel touché alors que l'app était fermée.
  const last = Notifications.getLastNotificationResponse();
  if (last) {
    Notifications.clearLastNotificationResponse();
    handle(last);
  }
  const subscription = Notifications.addNotificationResponseReceivedListener(handle);
  return () => subscription.remove();
}
