import { UserCommandType } from './userCommand.model';
import { User, Users } from '../model/user.model';

export const createActivateCommand = (userId: string) => ({
  type: UserCommandType.Activate,
  userId: userId,
  execute: (users: Users, setUsers: (a: (oldUsers: Users) => Users) => void) => {
    const user: User | undefined = users.find((u) => u.id === userId);
    if (user) {
      user.isActive = true;
      setUsers((oldUsers) => [...oldUsers.filter((u) => u.id !== userId), user]);
    }
  }
});
