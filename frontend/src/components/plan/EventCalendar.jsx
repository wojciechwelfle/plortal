import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import Formular from "./formular";
import "./EventCalendar.css";
import { getEventByUserId } from "../../services/planService";

const EventCalendar = () => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const polishDaysOfWeek = {
    Monday: "Poniedziałek",
    Tuesday: "Wtorek",
    Wednesday: "Środa",
    Thursday: "Czwartek",
    Friday: "Piątek",
  };
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

  const [events, setEvents] = useState([]);
  const userId = localStorage.getItem("Id");

  useEffect(() => {
    if (userId) {
      getEventByUserId(userId)
        .then((response) => {
          if (response.data) {
            setEvents(response.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching events:", error);
        });
    }
  }, [userId]);

  return (
    <div className="calendar">
      <Container fluid style={{ marginTop: "10px" }}>
        <Row>
          <Col md={6} className="calendar-table" style={{ marginLeft: "10%" }}>
            <Table bordered>
              <thead>
                <tr>
                  <th></th>
                  {daysOfWeek.map((day) => (
                    <th key={day}>{polishDaysOfWeek[day]}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {hoursOfDay.map((hour) => (
                  <tr key={hour}>
                    <td>{hour}</td>
                    {daysOfWeek.map((day) => {
                      const eventsForHour = events.filter(
                        (event) => event.day === day && event.startTime === hour
                      );
                      return (
                        <td key={`${day}-${hour}`} className="event-td">
                          <div className="calendar-event">
                            {eventsForHour.map((event) => (
                              <div
                                key={event.id}
                                className="calendar-event-item"
                                style={{ width: `100%` }}
                              >
                                <strong>{event.title}</strong>
                                <p>{event.description}</p>
                              </div>
                            ))}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={4} className="calendar-form" style={{ marginRight: "15%" }}>
            <Formular daysOfWeek={daysOfWeek} hoursOfDay={hoursOfDay} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EventCalendar;
