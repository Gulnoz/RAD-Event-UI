import React from 'react';
import { Table } from 'semantic-ui-react'

const Event = props => {
    const { event, handleUpdateDelete} = props;
        return (
            <Table.Row>
            <Table.Cell>{event.organizer}</Table.Cell>
            <Table.Cell>{event.venue}</Table.Cell>
            <Table.Cell>{event.date}</Table.Cell>
            <Table.Cell>
                <button name = 'UPDATE' 
                    onClick={(e)=>{ handleUpdateDelete(event,e.target.name) }}>Edit</button>
                <button name='DELETE' 
                    onClick={(e) => { handleUpdateDelete(event, e.target.name) }}>Delete</button>
            </Table.Cell>
            </Table.Row>
        )
}
export default Event;