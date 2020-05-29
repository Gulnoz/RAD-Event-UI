import React, { useReducer } from 'react';
import { Button, Form, Segment} from "semantic-ui-react"

const initialState = {
    organizer: "",
    venue: "",
    date: "",
    errorMessege: null
}

function reducer(state,{field, value}){
    return{
        ...state,
        [field]: value
    }
}
const CreateEventForm = props =>{
    const { fetchCreateEvent } = props;
    const[state, dispatch] = useReducer(reducer, initialState);
    
    const onChange = (e) =>{
       dispatch({ field: e.target.name, value: e.target.value});
    };
    const { organizer, venue, date} = state;
    return (
        <Segment compact>
            <h2>Add Event:</h2>
            <Form onSubmit={() => { fetchCreateEvent(state)}}>
                <Form.Field>
                    <span >Organizer:</span> <input name="organizer"value={organizer} onChange={onChange} />
                </Form.Field>
                <Form.Field>
                    Venue: <input name="venue" value={venue} onChange={onChange} />
                </Form.Field>
                <Form.Field>
                    Date: <input name="date" value={date} onChange={onChange} />
                </Form.Field>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button type='submit'>Add</Button></div>
            </Form>
        </Segment>
    );
}

export default CreateEventForm;