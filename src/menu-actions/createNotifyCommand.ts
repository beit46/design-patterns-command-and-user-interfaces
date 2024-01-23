import { UserCommandType } from './userCommand.model';
import { User, Users } from '../model/user.model';

export const createNotifyCommand = (userId: string) => ({
  type: UserCommandType.Notify,
  userId: userId,
  execute: (users: Users, setUsers: (a: (oldUsers: Users) => Users) => void) => {
    const user: User | undefined = users.find((u) => u.id === userId);
    if (user) {
      user.isNotified = true;
      setUsers((oldUsers) => [...oldUsers.filter((u) => u.id !== userId), user]);
      setTimeout(() => {
        user.isNotified = false;
        setUsers((oldUsers) => [...oldUsers.filter((u) => u.id !== userId), user]);
      }, 3000);
    }
  }
});
