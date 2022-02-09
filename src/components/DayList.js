import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props){
    const {days} = props;
    const list = days.map(day => <DayListItem 
                                    name={day.name}
                                    spots={day.spots} 
                                    selected={day.name === props.day}
                                    setDay={(event) => props.setDay(day.name)}
                                    key ={day.id}/>);
    return(
        <>
        <ul>
            {list}
        </ul>
        </>
    );
}