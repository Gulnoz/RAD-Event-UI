import React, { useReducer, useEffect } from 'react';
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
const CreateUpdateForm = props =>{
    const { fetchUpdateEvent, fetchCreateEvent, event, action, cancelHendler } = props;
   
    const[state, dispatch] = useReducer(reducer, initialState);
    
    useEffect(() => {
        console.log(event)
        if(event && action === 'UPDATE'){
            for(let key in event){
                dispatch({ field: key, value: event[key] });
            }
        }
    },[event, action]);

    const onChange = (e) =>{
        dispatch({ field: e.target.name, value: e.target.value});
    };
    const clearForm = () =>{
        for(let key in state){
            dispatch({ field: key, value: "" });
        }
    }
    const clickHandle = () => {
        fetchUpdateEvent(state);
        clearForm();
    }

    const submitHandle = (e) => {
        debugger;
        console.log(e);
        e.preventDefault();
        console.log('submit button')
        fetchCreateEvent(state);
        clearForm();
    }

    const cancelHendle =()=>{
        cancelHendler();
        clearForm();
    }
    
    const { organizer, venue, date} = state;
    return (
        <Segment compact>
            <h2>{event ? "Update" : "Add"} Event:</h2>
            <Form onSubmit = {submitHandle}>
                <Form.Field>
                Organizer: <input required name = "organizer" value={organizer} onChange={onChange} />
                </Form.Field>
                <Form.Field>
                    Venue: <input required name = "venue" value={venue} onChange={onChange} />
                </Form.Field>
                <Form.Field>
                    Date: <input required name = "date" value={date} onChange={onChange} />
                </Form.Field>
                <div>
                    <>
                    <Button style={event ? { display: "" } : { display: "none" }} 
                            type='button' onClick={cancelHendle}>Cancel</Button>
                    <Button style={event ? { display: "" } : { display: "none" }}
                            type = 'button' onClick = {clickHandle}>Update</Button>
                    <Button type = 'submit' style={event ? {display:"none"} : {display:""}}>Add</Button>
                    </>
                </div>
            </Form>
        </Segment>
    );
}

export default CreateUpdateForm;