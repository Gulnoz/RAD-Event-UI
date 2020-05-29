import React,{useState, useEffect} from 'react';
import './App.css';
import EventList from './Components/EventList'
import CreateUpdateEvent from './Components/CreateUpdateEvent'

const App = props => {
  const [events, setEvents] = useState(null);
  const [event, setEvent] = useState(null);
  const [action, setAction] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () =>{
    fetch('https://qfdybmvc7d.execute-api.us-east-2.amazonaws.com/dev/events')
      .then(res => res.json())
      .then(events => {
        setEvents(events)
      });
  }
  const fetchDeleteEvent = (id) =>{
    fetch(`https://qfdybmvc7d.execute-api.us-east-2.amazonaws.com/dev/events/${id}`,{
      method: 'DELETE'
    })
    .then(res => res.json())
      .then(data => {
        if(data.message){
            deleteHandler(id)
        }});
  }
  const deleteHandler = (id) =>{
    let newEvents = events.filter(event => event.event_id !== id);
    setEvents(newEvents);
  }
  const handleCreateEvent=(event)=>{
    setEvents([...events, event]);
  }
  const handleUpdateEvent = (event) =>{
    console.log(event)
    let id = event.event_id
    let newEvents = events.filter(event => event.event_id !== id);
    setEvents([...newEvents, event]);
  }
  const handleUpdateDelete = (event, action) =>{
    setEvent(event);
    setAction(action);
    if(action === "DELETE"){
      fetchDeleteEvent(event.event_id);
    }
  }
  const cancelHendler = () =>{
    debugger;
    console.log('cancel')
  setEvent(null);
  }
  return (
    <>
      <h2>Welcome to the Ride-and-Drive Event Database!</h2>
      <EventList
          handleUpdateDelete={handleUpdateDelete}
          events={events} 
          fetchEvents={fetchEvents}
      />
      <CreateUpdateEvent 
          event={event} 
          action={action}
          handleUpdateEvent={handleUpdateEvent}
          handleCreateEvent={handleCreateEvent}
          cancelHendler={cancelHendler}
      />
    </>
  );
}
export default App;
