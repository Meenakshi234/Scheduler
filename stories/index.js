import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import Button from "components/Button";
import DayListItem from "components/DayListItem";
import DayList from "components/DayList";
import InterviewerListItem from "components/InterviewerListItem";
import InterviewerList from "components/InterviewerList";

import Appointment from "components/Appointment/index";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Confirm from "components/Appointment/Confirm";
import Error from "components/Appointment/Error";
import Show from "components/Appointment/Show";
import Status from "components/Appointment/Status";
import Form from "components/Appointment/Form";

const days = [
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
];

const interviewer = {
  id: 1,
  name: "Sylvia Palmer",
  avatar: "https://i.imgur.com/LpaY82x.png"
};
const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];
const student ="Lydia Miller-Jones";
const confirmMessage = "Delete the appointment?";
const deleteMessage ="Deleting";
const errorMessage = "Could not delete appointment.";

storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Base", () => <Button>Base</Button>)
  .add("Confirm", () => <Button confirm>Confirm</Button>)
  .add("Danger", () => <Button danger>Cancel</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));

  storiesOf("DayListItem", module) 
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("Unselected", () => <DayListItem name="Monday" spots={5} />) 
  .add("Selected", () => <DayListItem name="Monday" spots={5} selected />) 
  .add("Full", () => <DayListItem name="Monday" spots={0} />)
  .add("Clickable", () => (
    <DayListItem name="Tuesday" setDay={action("setDay")} spots={5} /> 
  ));

  storiesOf("DayList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("Monday", () => (
    <DayList days={days} day={"Monday"} setDay={action("setDay")} />
  ))
  .add("Tuesday", () => (
    <DayList days={days} day={"Tuesday"} setDay={action("setDay")} />
  ));
  
  
  storiesOf("InterviewerListItem", module)
    .addParameters({
      backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
    })
    .add("Unselected", () => (
      <InterviewerListItem
        id={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
      />
    ))
    .add("Selected", () => (
      <InterviewerListItem
        id={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected
      />
    ))
    .add("Clickable", () => (
      <InterviewerListItem
        id={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        onChange={event => action("onChange")(interviewer.id)}
      />
    ));
    
    storiesOf("InterviewerList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Initial", () => (
    <InterviewerList
      interviewers={interviewers}
      onChange={action("onChange")}
    />
  ))
  .add("Preselected", () => (
    <InterviewerList
      interviewers={interviewers}
      value={3}
      onChange={action("onChange")}
    />
  ));
  storiesOf("Appointment", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Appointment", () => <Appointment />)
  .add("Appointment with Time", () => <Appointment time="12pm" />)
  .add("Appointment Empty", () => (
    <Fragment>
      <Appointment id={1} time="12pm" />
      <Appointment id="last" time="1pm" />
    </Fragment>
  ))
  .add("Appointment Booked", () => (
    <Fragment>
      <Appointment
        id={1}
        time="12pm"
        interview={{ student: "Lydia Miller-Jones", interviewer }}
      />
      <Appointment id="last" time="1pm" />
    </Fragment>
  ))
  
  
  /* storiesOf("Header",module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  }) */
  .add("Header", () => <Header time="12pm" />)

  /* storiesOf("Empty",module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  }) */
  .add("Empty", () => <Empty  onAdd={action("onAdd")} />)

  /* storiesOf("Confirm",module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  }) */
  .add("Confirm", () => <Confirm message ={confirmMessage} />)
  .add("Confirm Cancel/Confirm action",() => <Confirm  message ={confirmMessage} onCancel={action("onCancel")} onConfirm = {action("onConfirm")} />)
  
 /*  storiesOf("Error",module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  }) */
  .add("Error", () => <Error errorMessage={errorMessage} onClose ={action("onClose")} />)

  /* storiesOf("Show",module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  }) */
  .add("Show", () => <Show student ={student} interviewer ={interviewers[0].name} />)
  .add("Show on Edit /Delete",() => <Show student ={student} onEdit ={action("onEdit")} onDelete ={action("onDelete")} />)



  /* storiesOf("Status",module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  }) */
  .add("Status", () => <Status deleteMessage={deleteMessage} />) 

  /* storiesOf("Form", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  }) */
  .add("Create", () => <Form  interviewers={interviewers} name="" value ="null" onChange={action("onChange")} onSave ={action("onSave")} onCancel={action("onCancel")}/>)
  .add("Edit",() => <Form name={student} interviewers={interviewers} interviewer={3} onChange={action("onChange")} onSave={action("onSave")} onCancel ={action("onCancel")} />);