import { UserCommandType } from './userCommand.model';
import { Users } from '../model/user.model';

export const createDeleteCommand = (userId: string) => ({
  type: UserCommandType.Delete,
  userId: userId,
  execute: (_: Users, setUsers: (a: (oldUsers: Users) => Users) => void) => {
    setUsers((oldUsers) => oldUsers.filter((u) => u.id !== userId));
  }
});
