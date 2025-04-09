import { UserSetting } from 'src/graphql/models/UserSetting';

export const mockUserSettings: UserSetting[] = [
  {
    userId: 1,
    receiveNotifications: false,
    receiveEmails: false,
  },
  {
    userId: 2,
    receiveNotifications: false,
    receiveEmails: false,
  },
];
