import React from 'react';
import Form from './CreateUpdateForm'
const CreateUpdateEvent = props => {
    const { handleUpdateEvent, handleCreateEvent, event, action, cancelHendler } = props;

    const fetchCreateEvent = (event) => {
        fetch('https://qfdybmvc7d.execute-api.us-east-2.amazonaws.com/dev/events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                organizer: event.organizer,
                venue: event.venue,
                date: event.date
            })})
            .then(res => res.json())
            .then(eventObj => {
                handleCreateEvent(eventObj);
            });
    }
    const fetchUpdateEvent = (event) => {
        fetch(`https://qfdybmvc7d.execute-api.us-east-2.amazonaws.com/dev/events/${event.event_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                organizer: event.organizer,
                venue: event.venue,
                date: event.date
            })})
            .then(res => res.json())
            .then(event => {
                handleUpdateEvent(event);
            });
    }
    return (
        <Form
            fetchUpdateEvent={fetchUpdateEvent} 
            fetchCreateEvent={fetchCreateEvent}
            event={event} action={action}
            cancelHendler={cancelHendler}
        />
    );
}
export default CreateUpdateEvent;