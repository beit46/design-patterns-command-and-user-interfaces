import { useState } from 'react';
import { AppShell, Title } from '@mantine/core';
import classes from './App.module.css';
import { TableSorted } from './TableSorted/TableSorted';
import { useDisclosure } from '@mantine/hooks';
import { Users } from './model/user.model';
import { defaultUsers } from './model/users.default';
import { UserCommands } from './menu-actions/userCommand.model';

export default function App() {
  const [users, setUsers] = useState<Users>(defaultUsers());
  const [opened] = useDisclosure();

  const handleCommand = (userCommand: UserCommands) => {
    userCommand.execute(users, setUsers);
  };

  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened }
      }}
      padding="md">
      <AppShell.Navbar>
        <nav className={classes.navbar}>
          <div className={classes.wrapper}>
            <div className={classes.main}>
              <Title order={4} className={classes.title}>
                'My Cool App'
              </Title>

              <a className={classes.link} data-active={true} href="#" key={'My Cool App'}>
                {'My Cool App'}
              </a>
            </div>
          </div>
        </nav>
      </AppShell.Navbar>

      <AppShell.Main>
        <TableSorted users={users} onCommand={handleCommand} />
      </AppShell.Main>
    </AppShell>
  );
}
