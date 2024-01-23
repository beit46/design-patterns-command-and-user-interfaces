export enum MenuActionCommands {
    Clone,
    Delete,
}
export interface MenuActionCommand {
    name: MenuActionCommands,
    payload: string
}

export interface CloneCommand extends MenuActionCommand {
    name: MenuActionCommands.Clone,
    payload: string
}

export interface DeleteCommand extends MenuActionCommand {
    name: MenuActionCommands.Delete,
    payload: string
}
