import { useState } from 'react';
import { Title} from '@mantine/core';
import classes from './App.module.css';
import {TableSorted} from "./TableSorted/TableSorted";
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {User, Users} from "./model/user.model";
import {defaultUsers} from "./model/users.default";
const createUser = ({name, company, email}:{name: string, company: string, email: string}) => ({name, company, email, id: crypto.randomUUID()})

export default function App() {
    const [users, setUsers]  = useState<Users>(defaultUsers())
    const [opened] = useDisclosure();


    const handleDelete = (userId: string) => {
        setUsers((oldUsers) => oldUsers.filter(u => u.id !== userId))
    }

    const handleClone = (userId: string) => {
        const user: User | undefined = users.find(u => u.id === userId)
        if (user)
            setUsers((oldUsers) => [...oldUsers, createUser(user)])
    }

    return (
        <AppShell

            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >

            <AppShell.Navbar >
                <nav className={classes.navbar} >
                    <div className={classes.wrapper}>
                        <div className={classes.main}>
                            <Title order={4} className={classes.title}>
                                'My Cool App'
                            </Title>

                            <a
                                className={classes.link}
                                data-active={true}
                                href="#"
                                key={'My Cool App'}
                            >
                                { 'My Cool App'}
                            </a>
                        </div>
                    </div>
                </nav>
            </AppShell.Navbar>

            <AppShell.Main>
                <TableSorted
                    users={users}
                    onClone={handleClone}
                    onDelete={handleDelete}
                />
            </AppShell.Main>
        </AppShell>
    );
}


