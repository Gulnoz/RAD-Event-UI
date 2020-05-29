import React from 'react';
import { Table, Container, Button } from 'semantic-ui-react'
import './Event.css'
import Event from './Event'

const EventList = props=> {
  const { events, fetchEvents } = props;
  
  return (
    <Container>
      <div>Here are the events in the database:</div>
    <Table unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Organizer</Table.HeaderCell>
          <Table.HeaderCell>Venue</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
          {events? <Event events={events}/> : null}
      </Table.Body>
    </Table>
      <Button type='button' onClick={() => { fetchEvents()}}>Refresh / Read</Button>
    </Container>
  );
}

export default EventList;
