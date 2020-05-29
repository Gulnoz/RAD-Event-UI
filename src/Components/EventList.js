import React from 'react';
import { Table, Container, Button } from 'semantic-ui-react'
import './Event.css'
import Event from './Event'

const EventList = props => {
  const { events, fetchEvents, handleUpdateDelete } = props;
  
  const oneEvent = () =>{
    return events.map((event, index) => <Event key={index} event={event} handleUpdateDelete={handleUpdateDelete}/>)
  }
  return (
    <Container>
      <div>Here are the events in the database:</div>
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Organizer</Table.HeaderCell>
            <Table.HeaderCell>Venue</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {events ? oneEvent() : null}
        </Table.Body>
      </Table>
      <Button type='button' onClick={fetchEvents}>Refresh / Read</Button>
    </Container>
  );
}
export default EventList;
