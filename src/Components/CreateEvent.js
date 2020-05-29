import React, {useState, setState} from 'react';
import Form from './CreateEventForm'
const CreateEvent = props => {
    const { hendleCreateEvent } = props;

    const fetchCreateEvent = (event) => {
        fetch('https://qfdybmvc7d.execute-api.us-east-2.amazonaws.com/dev/events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                organizer: event.organizer,
                venue: event.venue,
                date: event.date
            })
        })
            .then(res => res.json())
            .then(eventObj => {
                hendleCreateEvent(eventObj);
            });
    }
    return (
        <Form fetchCreateEvent={fetchCreateEvent}/>
    );
}

export default CreateEvent;