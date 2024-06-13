import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import Formular from "./formular";
import "./EventCalendar.css";
import { getEventByUserId, deleteEvent } from "../../services/planService";
import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useTheme } from '../theme-context/ThemeContext';

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
  const { fontSize, theme } = useTheme();
  const [events, setEvents] = useState([]);
  const userId = localStorage.getItem("id");

  useEffect(() => {
    console.log("doszlo12");
    if (userId) {
      console.log("proba get event####");
      getEventByUserId(userId)
        .then((response) => {
          console.log("Response data:", response.data); 
          if (response.data) {
            setEvents(response.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching events:", error);
        });
    } else {
      console.log("User ID is not set");
    }
  }, [userId]);

  const deleteEventById = (id) => {
    deleteEvent(id)
      .then((res) => {
        console.log(res);
        setEvents(events.filter((event) => event.id !== id));
      })
      .catch((error) => {
        console.log("Cant delete this event" + error);
      });
  };

  return (
    <div className="calendar">
      <Container fluid >
        
          <div className="calendar-table" >
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
                        (event) => event.weekday === day && event.time === hour
                      );

                      console.log(
                        `Events for ${day} at ${hour}:`,
                        eventsForHour
                      ); 
                      return (
                        <td key={`${day}-${hour}`} className="event-td">
                          <div className="calendar-event">
                            {eventsForHour.map(
                              (event) => (
                                console.log(
                                  `data: ${day} at ${hour} | ${event.day} at ${event.StartTime} `
                                ),
                                (
                                  <div
                                    key={event.id}
                                    className="calendar-event-item"
                                    style={{ width: `100%` }}
                                  >
                                    <div>{event.subjectName}</div>
                                    <div>{event.description}</div>
                                   
                                    <Button
                                      className="del-btn bi bi-trash"
                                      variant="null"
                                      onClick={() => deleteEventById(event.id)}
                                    ></Button>
                                  </div>
                                )
                              )
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="calendar-form" style={{paddingLeft:"40%"}}>
            <Formular daysOfWeek={daysOfWeek} hoursOfDay={hoursOfDay} events={events} setEvents={setEvents}/>
          </div>
      
      </Container>
    </div>
  );
};

export default EventCalendar;
