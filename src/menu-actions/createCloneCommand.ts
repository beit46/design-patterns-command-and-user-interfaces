import { UserCommandType } from './userCommand.model';
import { User, Users } from '../model/user.model';
import { createUser } from '../createUser';

export const createCloneCommand = (userId: string) => ({
  type: UserCommandType.Clone,
  userId: userId,
  execute: (users: Users, setUsers: (a: (oldUsers: Users) => Users) => void) => {
    const user: User | undefined = users.find((u) => u.id === userId);
    if (user) setUsers((oldUsers) => [...oldUsers, createUser(user)]);
  }
});
