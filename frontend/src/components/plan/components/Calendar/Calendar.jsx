import { Table, Container, Row, Col } from "react-bootstrap";
import CalendarForm from "../CalendarForm";
//import { useEvents } from "../../context/EventsContext";
import { useState } from "react";
import Event from "../Event";
import "./styles.css";

const Calendar = () => {

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const hoursOfDay = [
    "8:15",
    "9:15",
    "10:15",
    "11:15",
    "12:15",
    "13:15",
    "14:15",
    "15:15",
    "16:15",
    "17:15",
  ];

  //const { events } = useEvents();

  return (
    <div className="calendar">
      <Container style={{marginTop: "10px"}}>
        <Row>
          <Col>
            <Table borderless>
              <thead>
                <tr>
                  <th></th>
                  
                  {daysOfWeek.map((day) => (
                    <th key={day}>{day}</th>
                  ))}
                 
                </tr>
              </thead>
              <tbody>
                {hoursOfDay.map((hour) => (
                  <tr key={hour}>
                    <td>{hour}</td>
                    
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <CalendarForm
          daysOfWeek={daysOfWeek}
          hoursOfDay={hoursOfDay}
        />
      </Container>
    </div>
  );
};

export default Calendar;
