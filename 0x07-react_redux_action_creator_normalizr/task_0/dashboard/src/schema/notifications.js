import * as notificationsData from '../../notifications.json';

export default function getAllNotificationsByUser(userId) {
  return notificationsData.default
    .filter((item) => item.author.id == userId)
    .map(({ context }) => context);
}
