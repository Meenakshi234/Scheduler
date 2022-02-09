import React from "react";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "./Empty";

import "./styles.scss";
export default function Appointment(props) {
    let interviewArray;
    const studentName = props.interview ? props.interview.student : "";
    const interviewerName =props.interview ? props.interview.interviewer.name :"";
   
     return (
        <article className="appointment">
            <Header time={props.time} />
            {props.interview ? <Show student={studentName} interviewer={interviewerName}/> : <Empty/>}
        </article>
    );
}