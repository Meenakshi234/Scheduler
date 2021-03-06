import React from "react";
import "components/DayListItem.scss";
import classnames from "classnames";

export default function DayListItem(props) {
    const dayClass = classnames("day-list__item",{
        "day-list__item--selected" : props.selected,
        "day-list__item--full" : props.spots === 0 ? true :false
    }
    );
    function formatSpots(){
        
    }

    return (
        <li className={dayClass} onClick={props.setDay}>
            <h2 className= "text--regular">{props.name}</h2>
            <h3 className="text--light">{props.spots} spots remaining</h3>
        </li>
    );
}