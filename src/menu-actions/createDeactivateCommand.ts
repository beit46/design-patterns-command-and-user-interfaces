import { UserCommandType } from './userCommand.model';
import { User, Users } from '../model/user.model';

export const createDeactivateCommand = (userId: string) => ({
  type: UserCommandType.Deactivate,
  userId: userId,
  execute: (users: Users, setUsers: (a: (oldUsers: Users) => Users) => void) => {
    const user: User | undefined = users.find((u) => u.id === userId);
    if (user) {
      user.isActive = false;
      setUsers((oldUsers) => [...oldUsers.filter((u) => u.id !== userId), user]);
    }
  }
});
