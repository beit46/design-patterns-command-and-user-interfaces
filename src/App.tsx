import { useState } from 'react';
import { Title} from '@mantine/core';
import classes from './App.module.css';
import {TableSorted} from "./TableSorted/TableSorted";
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {User, Users} from "./model/user.model";

const linksMockdata = [
    'My Cool App',
];

const createUser = ({name, company, email}:{name: string, company: string, email: string}) => ({name, company, email, id: crypto.randomUUID()})

export default function App() {
    const [active, setActive] = useState('Releases');
    const [users, setUsers]  = useState<Users>([
        {
            id: crypto.randomUUID(),
            name: 'Athena Weissnat',
            company: 'Little - Rippin',
            email: 'Elouise.Prohaska@yahoo.com',
        },
        {
            id: crypto.randomUUID(),
            name: 'Enrico Bottani',
            company: 'Bloombastic',
            email: 'el@beit.rock',
        },
    ])
    const [opened] = useDisclosure();


    const handleDelete = (userId: string) => {
        console.log('on delete')
        setUsers((oldUsers) => oldUsers.filter(u => u.id !== userId))
    }

    const handleClone = (userId: string) => {
        const user: User | undefined = users.find(u => u.id === userId)
        if (user)
            setUsers((oldUsers) => [...oldUsers, createUser(user)])
    }

    const links = linksMockdata.map((link) => (
        <a
            className={classes.link}
            data-active={active === link || undefined}
            href="#"
            onClick={(event) => {
                event.preventDefault();
                setActive(link)
            }}
            key={link}
        >
            {link}
        </a>
    ));

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
                                {active}
                            </Title>

                            {links}
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


