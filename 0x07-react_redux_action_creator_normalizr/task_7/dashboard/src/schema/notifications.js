import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../notifications.json';

export default function getAllNotificationsByUser(userId) {
  const notifications = notificationSchema.entities.notifications;
  const messages = notificationSchema.entities.messages;
  const notificationsByUser = [];

  for (const property in notifications) {
    if (notifications[property].author === userId) {
      notificationsByUser.push(messages[notifications[property].context]);
    }
  }

  return notificationsByUser;
}

const user = new schema.Entity('users');

const message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid',
  }
);

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const notificationSchema = normalize(notificationsData.default, [notification]);

export { notificationSchema };
