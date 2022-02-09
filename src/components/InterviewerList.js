import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import  "components/InterviewerList.scss";

export default function InterviewerList(props){
    const interviewers = props.interviewers;
    const interviewersList = interviewers.map(interviewer => <InterviewerListItem 
                                                                onChange ={(event) => props.onChange(interviewer.id)} 
                                                                    selected= { interviewer.id === props.value} 
                                                                    avatar= {interviewer.avatar}
                                                                    name ={interviewer.name}
                                                                    key ={interviewer.id} /> );
    return (
        <>
        <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">{interviewersList}</ul>
</section>
        </>
    );
}