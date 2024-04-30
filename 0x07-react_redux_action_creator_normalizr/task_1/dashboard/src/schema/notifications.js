import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../notifications.json';

export default function getAllNotificationsByUser(userId) {
  return notificationsData.default
    .filter((item) => item.author.id == userId)
    .map(({ context }) => context);
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
