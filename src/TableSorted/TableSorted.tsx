import cx from 'clsx';
import { ScrollArea, Table, Text } from '@mantine/core';
import OptionsMenu from './OptionsMenu';
import { Th } from './Th';
import { Users } from '../model/user.model';
import { IconMessage } from '@tabler/icons-react';
import classes from './TableSelection.module.css';
import { commandFactory } from '../menu-actions/commandFactory';
import { UserCommands, UserCommandType } from '../menu-actions/userCommand.model';

export function TableSorted({
  users,
  onCommand
}: {
  users: Users;
  onCommand: (userCommand: UserCommands) => void;
}) {
  const rows = users
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .map((row) => (
      <Table.Tr
        key={row.id}
        className={cx({ [classes.rowActive]: row.isActive, [classes.rowInactive]: !row.isActive })}>
        <Table.Td>{row.name}</Table.Td>
        <Table.Td>{row.email}</Table.Td>
        <Table.Td>{row.company}</Table.Td>
        <Table.Td>{row.isNotified ? <IconMessage /> : null}</Table.Td>
        <Table.Td>
          <OptionsMenu
            onClone={() => onCommand(commandFactory(UserCommandType.Clone)(row.id))}
            onNotify={() => onCommand(commandFactory(UserCommandType.Notify)(row.id))}
            onActivate={() => onCommand(commandFactory(UserCommandType.Activate)(row.id))}
            onDeactivate={() => onCommand(commandFactory(UserCommandType.Deactivate)(row.id))}
            onDelete={() => onCommand(commandFactory(UserCommandType.Delete)(row.id))}
          />
        </Table.Td>
      </Table.Tr>
    ));

  return (
    <ScrollArea>
      <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
        <Table.Tbody>
          <Table.Tr>
            <Th sorted={false} reversed={false} onSort={() => {}}>
              Name
            </Th>
            <Th sorted={false} reversed={false} onSort={() => {}}>
              Email
            </Th>
            <Th sorted={false} reversed={false} onSort={() => {}}>
              Company
            </Th>
            <Th sorted={false} reversed={false} onSort={() => {}}>
              Notified
            </Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={Object.keys(users[0]).length}>
                <Text fw={500} ta="center">
                  Nothing found
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
