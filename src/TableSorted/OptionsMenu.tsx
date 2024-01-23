import { Menu, rem } from '@mantine/core';
import { IconSettings, IconTrash, IconMenu2 } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
export default function OptionsMenu({
  onClone,
  onDelete,
  onNotify,
  onActivate,
  onDeactivate
}: {
  onClone: () => void;
  onDelete: () => void;
  onNotify: () => void;
  onActivate: () => void;
  onDeactivate: () => void;
}) {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <ActionIcon variant="filled" aria-label="Settings">
          <IconMenu2 style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          onClick={onClone}
          leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
          Clone
        </Menu.Item>

        <Menu.Item
          onClick={onNotify}
          leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
          Notify
        </Menu.Item>

        <Menu.Item
          onClick={onActivate}
          leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
          Activate
        </Menu.Item>

        <Menu.Item
          color="red"
          onClick={onDeactivate}
          leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}>
          Deactivate
        </Menu.Item>

        <Menu.Item
          color="red"
          onClick={onDelete}
          leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}>
          Delete
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
