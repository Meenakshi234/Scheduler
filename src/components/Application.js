import React ,{useState , useEffect} from "react";
import axios from "axios";
import "components/Application.scss";
import DayList from "./DayList"; 
import InterviewerList from "./InterviewerList";
import Appointment from "components/Appointment/index";


const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Cohen",
      interviewer: {
        id: 1,
        name: "Tori Malcolm",
        avatar: "https://i.imgur.com/Nmx0Qxo.png",
      }
    }
  }
  , {
    id: 5,
    time: "4pm",
    interview: {
      student: "Maria Boucher",
      interviewer: {
        id: 1,
        name: "Mildred Nazir",
        avatar: "https://i.imgur.com/T2WwVfS.png",
      }
    }
  }
];
 
export default function Application(props) {
 /*  const [day,setDay] = useState("Monday");
  const [days,setDays] = useState([]);
  const [appointments, setAppointments] = useState({}) */

  const[interviewer,setInterviewer] = useState("");
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: {}
  });

  const setDay = day => setState({ ...state, day });
 /*  const setDays = days => setState({ ...state, days }); */
 const setDays = days => setState(prev =>({...prev,days}));

  /* const days = [
    {
      id: 1,
      name: "Monday",
      spots: 2,
    },
    {
      id: 2,
      name: "Tuesday",
      spots: 5,
    },
    {
      id: 3,
      name: "Wednesday",
      spots: 0,
    },
  ]; */
  const appointmentList = appointments.map( (appointment) =>{
          return appointment.interview ? <Appointment key={appointment.id} {...appointment} />  : <Appointment key={appointment.id} time={appointment.time} id={appointment.id} />
   
  });
  
  appointmentList.push(<Appointment key="last" time="5pm" />);

 useEffect(() =>{
    const daysUrl ="/api/days";
    axios.get(daysUrl).then(response => setDays(response.data));
   },[]);
  
  return (
    <main className="layout">
      <section className="sidebar">
        { <>
         <img className="sidebar--centered" src="images/logo.png" alt="Interview Scheduler"/>
        <hr className="sidebar__separator sidebar--centered"/>
        <nav className="sidebar__menu">
        <DayList days={state.days} day={state.day} setDay={setDay} />
         </nav>
        <img className="sidebar__lhl sidebar--centered" src="images/lhl.png" alt="Lighthouse Labs"/>
        </>
        }
      </section>
      <section className="schedule">
        {appointmentList}
      </section>
    </main>
  );
}
