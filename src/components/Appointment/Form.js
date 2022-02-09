import React, {useState} from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
 
export default function Form(props)
{
    const [name,setName] = useState(props.name || "");
    const[interviewer,setInterviewer] = useState(props.interviewer || null);
    function reset(){
        setName("");
        setInterviewer(null);
    }
    function cancel(){
        reset();
        props.onCancel();
    }
    function save(){
        console.log(name);

    }
    function onChange(event){
        // not sure about this logic
        setInterviewer(event);
       /* console.log("id" ,event.target.id); */
        /* console.log("interviewer value" ,event.target.value); */
        
        props.onChange();
    }
    return (
        <>
            <main className="appointment__card appointment__card--create">
            <section className="appointment__card-left">
                <form autoComplete="off" onSubmit={event => event.preventDefault()} >
                    <input className="appointment__create-input text--semi-bold" name="name1" type="text"  placeholder="Enter Student Name" value={name} onChange={(event)=> setName(event.target.value)}/>
                </form>
     {/*            <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={setInterviewer} /> */}
                <InterviewerList interviewers={props.interviewers} interviewer={props.value} onChange={onChange} />
            </section>
            <section className="appointment__card-right">
                <section className="appointment__actions">
                <Button danger onClick={cancel}>Cancel</Button>
                <Button confirm onClick={props.onSave}>Save</Button>
                </section>
            </section>
            </main>
        
        </>
    );

}