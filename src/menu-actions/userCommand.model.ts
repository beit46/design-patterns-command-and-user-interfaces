import { Users } from '../model/user.model';

export enum UserCommandType {
  Clone = 'Clone',
  Delete = 'Delete',
  Notify = 'Notify',
  Activate = 'Activate',
  Deactivate = 'Deactivate'
}

export interface UserActionCommand {
  type: UserCommandType;
  userId: string;
  execute: (users: Users, setUsers: (a: (oldUsers: Users) => Users) => void) => void;
}

export interface CloneCommand extends UserActionCommand {
  type: UserCommandType.Clone;
}

export interface DeleteCommand extends UserActionCommand {
  type: UserCommandType.Delete;
}

export interface NotifyCommand extends UserActionCommand {
  type: UserCommandType.Notify;
}

export interface ActivateCommand extends UserActionCommand {
  type: UserCommandType.Activate;
}

export interface DeactivateCommand extends UserActionCommand {
  type: UserCommandType.Deactivate;
}

export type UserCommands =
  | CloneCommand
  | DeleteCommand
  | NotifyCommand
  | ActivateCommand
  | DeactivateCommand;
