import React from "react";
import "components/InterviewerListItem.scss";
import classnames from "classnames";

export default function InterviewerListItem(props){
  const interviwers = classnames("interviewers__item",{
    "interviewers__item--selected":props.selected
  });
  const interviewersImage = classnames("interviewers__item-image",{

      "interviewers__item--selected-image":props.selected
  });
    return (
        <>
        <li className={interviwers} onClick = {props.onChange}>
        <img className={interviewersImage} src={props.avatar} alt= {props.name} />
        {props.selected && props.name}
        </li>
        </>
    );
}