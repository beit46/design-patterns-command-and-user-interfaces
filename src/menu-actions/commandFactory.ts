import { UserCommands, UserCommandType } from './userCommand.model';
import { createCloneCommand } from './createCloneCommand';
import { createDeleteCommand } from './createDeleteCommand';
import { createActivateCommand } from './createActivateCommand';
import { createDeactivateCommand } from './createDeactivateCommand';
import { createNotifyCommand } from './createNotifyCommand';

export const commandFactory: (userCommand: UserCommandType) => (userId: string) => UserCommands = (
  userCommand
) => {
  switch (userCommand) {
    case UserCommandType.Clone:
      return createCloneCommand;
    case UserCommandType.Delete:
      return createDeleteCommand;
    case UserCommandType.Notify:
      return createNotifyCommand;
    case UserCommandType.Activate:
      return createActivateCommand;
    case UserCommandType.Deactivate:
      return createDeactivateCommand;
  }
};
