import React, { useState, useRef, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { createEvent } from "../../services/planService";
import "./formular.css"
import { addCourse } from "../../services/courseService";

const Formular = ({ daysOfWeek, hoursOfDay }) => {
  const savedFontSize = parseInt(localStorage.getItem("fontSize"), 10) || 20;
  const [fontSize, setFontSize] = useState(savedFontSize);

  const [eventInput, setEventInput] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const userId = localStorage.getItem("id");

  const handleEventChange = (event) => {
    setEventInput(event.target.value);
  };

  const handleSelectDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleSelectTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const addEvent = () => {  
    console.log('eveeent');
    if (1) {  /* selectedDay && selectedTime && eventInput*/
      addEventToData(eventInput, selectedDay, selectedTime, userId);
      console.log("doszlo!");
      
    } else {
      console.error("Selected date or note input is missing!");
    }
    
  };

  const addEventToData = (eventName, day, time, userId) => {
    console.log("doszlo2!");
    const event = {
      weekday: day,
      time: time,
      subjectName: eventName,
      userId: userId,
    };
    console.log('Event Data:', event); 
    createEvent(event)
      .then((response) => {
        console.log("Note added successfully:", response.data);
      
        console.log("doszlo3!");
      })
      .catch((error) => {
        
        console.log(day,time,eventName,userId);
        console.error("Failed to add event:", error);
        console.log("doszlo4!");
      });
      setEventInput("");
       setSelectedDay("");
      setSelectedTime("");
  };

  return (
    <div className="calendar-form">
      <Form>
        <h5>Dodaj zajęcia</h5>
        <Form.Group controlId="eventName">
          <Form.Label>Przedmiot</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Wpisz nazwę przedmiotu"
            value={eventInput}
            onChange={handleEventChange}
            required
            maxLength="40"
          />
        </Form.Group>

        <Form.Group controlId="eventDay">
          <Form.Label>Dzień Tygodnia</Form.Label>
          <Form.Control
            as="select"
            value={selectedDay}
            onChange={handleSelectDayChange}
            required
          >
            <option value="" disabled>
              Wybierz dzień
            </option>
            {daysOfWeek.map((day) => (
              <option key={day}>{day}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="eventTime">
          <Form.Label>Godzina</Form.Label>
          <Form.Control
            as="select"
            value={selectedTime}
            onChange={handleSelectTimeChange}
            required
          >
            <option value="" disabled>
              wybierz godzinę
            </option>
            {hoursOfDay.map((hour) => (
              <option key={hour}>{hour}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button
          className="btn-notes"
          onClick={addEvent}
          style={{ fontSize: `${fontSize}px` }}
        >
          Dodaj zajęcia
        </Button>
      </Form>
    </div>
  );
};

export default Formular;
