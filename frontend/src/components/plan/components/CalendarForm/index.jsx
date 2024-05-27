import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import "./styles.css";

const CalendarForm = ({ daysOfWeek, hoursOfDay }) => {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const userMail = localStorage.getItem("email");

  useEffect(() => {
    if (selectedDate) {
      fetchNotesForDate(selectedDate.format("YYYY-MM-DD"), userMail);
    }
  }, [selectedDate, userMail]);

  const addNote = () => {
    if (selectedDate && noteInput) {
      const dateString = selectedDate.format("YYYY-MM-DD");
      addNoteToData(noteInput, dateString, userMail);
    } else {
      showNotesNotification(
        "warning",
        "Failed to add! Selected date or note input is missing!"
      );
      console.error("Selected date or note input is missing!");
    }
  };

  const addNoteToData = (noteInput, dateString, userMail) => {
    const note = {
      date: dateString,
      description: noteInput,
      userEmail: userMail,
    };

    axios.post('/api/notes', note)
      .then((response) => {
        showNotesNotification(
          "success",
          "Adding note completed! Note is signed to your account"
        );
        fetchNotesForDate(dateString, userMail);
        setNoteInput("");
      })
      .catch((error) => {
        showNotesNotification(
          "danger",
          "Failed to add! Message is above 50 characters!"
        );
        console.error("Failed to add", error.response.status);
      });
  };

  const fetchNotesForDate = (dateString, userMail) => {
    axios.get(`/api/notes?date=${dateString}&userEmail=${userMail}`)
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notes", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.eventName.value;
    const day = event.target.eventDay.value;
    const startTime = event.target.eventTime.value;

    const [hours, minutes] = startTime.split(":").map(Number);
    const endTime = `${hours + 1}:${minutes < 10 ? '0' : ''}${minutes}`;

    const eventDetails = {
      name,
      day,
      startTime,
      endTime
    };

    axios.post('/api/events', eventDetails)
      .then((response) => {
        console.log("Event added successfully");
      })
      .catch((error) => {
        console.error("Failed to add event", error);
      });
  };

  const showNotesNotification = (type, message) => {
    // Implement a function to show notifications (e.g., using a toast library)
    console.log(type, message);
  };

  return (
    <div className="calendar-form">
      <Form onSubmit={handleSubmit}>
        <h5>Add event</h5>
        <Form.Group controlId="eventName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter event name" required />
        </Form.Group>

        <Form.Group controlId="eventDay">
          <Form.Label>Day</Form.Label>
          <Form.Control as="select" required>
            {daysOfWeek.map((day) => (
              <option key={day}>{day}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="eventTime">
          <Form.Label>Time</Form.Label>
          <Form.Control as="select" required>
            {hoursOfDay.map((hour) => (
              <option key={hour}>{hour}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button
          variant="dark"
          size="lg"
          className="btn-notes"
          onClick={addNote}
          style={{ fontSize: `10px` }}
        >
          Dodaj przedmiot
        </Button>
      </Form>
    </div>
  );
};

export default CalendarForm;

