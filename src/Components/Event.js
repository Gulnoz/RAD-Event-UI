import React from 'react';
import { Table } from 'semantic-ui-react'
const Event = props => {
    const{events} = props;

    return events.map(event => {
        return (
        <Table.Row>
            <Table.Cell>{event.organizer}</Table.Cell>
            <Table.Cell>{event.venue}</Table.Cell>
            <Table.Cell>{event.date}</Table.Cell>
        </Table.Row>
        )
    })
}
export default Event;