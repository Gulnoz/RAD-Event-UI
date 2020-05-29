import React,{useState, useEffect} from 'react';
import './App.css';
import EventList from './Components/EventList'
import CreatEvent from './Components/CreateEvent'

const App = props => {
  const [events, setEvents] = useState(null);

  const fetchEvents=()=>{
    fetch('https://qfdybmvc7d.execute-api.us-east-2.amazonaws.com/dev/events')
      .then(res => res.json())
      .then(events => {
        setEvents(events)
      });
  }
  useEffect(() => {
    fetchEvents();
  }, []);
  const hendleCreateEvent=(event)=>{
    setEvents([...events, event]);
  }
  return (
    <>
      <h2>Welcome to the Ride-and-Drive Event Database!</h2>
      <EventList events={events} fetchEvents={fetchEvents}/>
      <CreatEvent hendleCreateEvent={hendleCreateEvent}/>
    </>

  );
}

export default App;
