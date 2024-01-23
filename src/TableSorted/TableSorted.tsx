import {ScrollArea, Table, Text} from '@mantine/core';
import OptionsMenu from "./OptionsMenu";
import {Th} from "./Th";
import {Users} from "../model/user.model";



export function TableSorted({ users, onClone, onDelete }: { users: Users, onClone: (user: string) => void, onDelete: (user: string) => void}) {


    const rows = users.map((row) => (
        <Table.Tr key={row.id}>
            <Table.Td>{row.name}</Table.Td>
            <Table.Td>{row.email}</Table.Td>
            <Table.Td>{row.company}</Table.Td>
            <Table.Td>

                <OptionsMenu
                    onClone={() => onClone(row.id)}
                    onDelete={() => onDelete(row.id)}
                />
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <ScrollArea>
            <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
                <Table.Tbody>
                    <Table.Tr>
                        <Th
                            sorted={false}
                            reversed={false}
                            onSort={() => {}}
                        >
                            Name
                        </Th>
                        <Th
                            sorted={false}
                            reversed={false}
                            onSort={() => {}}
                        >
                            Email
                        </Th>
                        <Th
                            sorted={false}
                            reversed={false}
                            onSort={() => {}}
                        >
                            Company
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