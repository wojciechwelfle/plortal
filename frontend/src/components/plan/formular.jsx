import React, { useState, useRef, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { createEvent } from "../../services/plan";

const Formular = ({ daysOfWeek, hoursOfDay }) => {
  const savedFontSize = parseInt(localStorage.getItem("fontSize"), 10) || 20;
  const [fontSize, setFontSize] = useState(savedFontSize);

  const [eventInput, setEventInput] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const userId = 12;//localStorage.getItem("Id");

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
    if (selectedDay && selectedTime && eventInput) {
      addEventToData(eventInput, selectedDay, selectedTime, userId);
    } else {
      console.error("Selected date or note input is missing!");
    }
  };

  const addEventToData = (eventName, day, time, userId) => {
    const event = {
      weekday: day,
      time: time,
      subjectName: eventName,
      userId: userId,
    };

    createEvent(event)
      .then((response) => {
        console.log("Note added successfully:", response.data);
        setEventInput("");
        setSelectedDay("");
        setSelectedTime("");
      })
      .catch((error) => {
        console.log(day,time,eventName,userId);
        console.error("Failed to add event:", error);
      });
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
              Select a time
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
          Dodaj przedmiot
        </Button>
      </Form>
    </div>
  );
};

export default Formular;

// const Formular = ({ daysOfWeek, hoursOfDay, event }) => {
//   const savedFontSize = parseInt(localStorage.getItem("fontSize"), 10) || 20;
//   const savedTheme = localStorage.getItem("theme") || "light";
//   const [fontSize, setFontSize] = useState(savedFontSize);

//   const [events, setEvents] = useState([]);
//   const [eventInput, setEventInput] = useState("");
//   const [selectedDay, setSelectedDay] = useState("");
//   const [selectedTime, setSelectedTime] = useState("");
//   const userMail = localStorage.getItem("email");
//   const NotesNotificationRef = useRef();

//   useEffect(() => {
//     fetchEvents(userMail);
//   }, [userMail]);

//   const handleEventChange = (event) => {
//     setEventInput(event.target.value);
//   };

//   const handleSelectDayChange = (event) => {
//     setSelectedDay(event.target.value);
//   };

//   const handleSelectTimeChange = (event) => {
//     setSelectedTime(event.target.value);
//   };

//   const addEvent = () => {
//     if (selectedDay && selectedTime && eventInput) {
//       addEventToData(eventInput, selectedDay, selectedTime, userMail);
//     } else {
//       showEventNotification(
//         "warning",
//         "Failed to add! Selected date or note input is missing!"
//       );
//       console.error("Selected date or note input is missing!");
//     }
//   };

//   const addEventToData = (eventName, day, time, userMail) => {
//     const card = {
//       day: day,
//       time: time,
//       description: eventName,
//       userEmail: userMail,
//     };

//     createEvent(card)
//       .then((response) => {
//         console.log(response.data);
//         showEventNotification(
//           "success",
//           "Adding note completed! Note is signed to your account"
//         );
//         console.log("Note added successfully");
//         fetchEvents(userMail);
//         setEventInput("");
//         setSelectedDay("");
//         setSelectedTime("");
//       })
//       .catch((error) => {
//         showEventNotification(
//           "danger",
//           "Failed to add! Message is above 50 characters!"
//         );
//         console.error("Failed to add", error.response.status);
//       });
//   };

//   const fetchEvents = (userMail) => {
//     getEventByUserId(userMail)
//       .then((response) => {
//         console.log(`events for ${userMail}:`, response.data);
//         setEvents((prevEvents) => ({
//           ...prevEvents,
//           [userMail]: response.data,
//         }));
//       })
//       .catch((error) => {
//         console.error("Error fetching notes", error);
//       });
//   };


//   const showEventNotification = (variant, alert) => {
//     // NotesNotificationRef.current.setEvent(alert);
//     // NotesNotificationRef.current.setVariantNote(variant);
//     // NotesNotificationRef.current.setVisibleNote(true);
//   };

//   return (
//     <div className="calendar-form">
//       <Form>
//         <h5>Dodaj zajęcia</h5>
//         <Form.Group controlId="eventName">
//           <Form.Label>Przedmiot</Form.Label>
//           <Form.Control
//             as="textarea"
//             placeholder="Wpisz nazwę przedmiotu"
//             value={eventInput}
//             onChange={handleEventChange}
//             required
//             maxLength="40"
//           />
//         </Form.Group>

//         <Form.Group controlId="eventDay">
//           <Form.Label>Dzień Tygodnia</Form.Label>
//           <Form.Control
//             as="select"
//             value={selectedDay}
//             onChange={handleSelectDayChange}
//             required
//           >
//             <option value="" disabled>
//               Wybierz dzień
//             </option>
//             {daysOfWeek.map((day) => (
//               <option key={day}>{day}</option>
//             ))}
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId="eventTime">
//           <Form.Label>Godzina</Form.Label>
//           <Form.Control
//             as="select"
//             value={selectedTime}
//             onChange={handleSelectTimeChange}
//             required
//           >
//             <option value="" disabled>
//               Select a time
//             </option>
//             {hoursOfDay.map((hour) => (
//               <option key={hour}>{hour}</option>
//             ))}
//           </Form.Control>
//         </Form.Group>

//         <Button
//           className="btn-notes"
//           onClick={addEvent}
//           style={{ fontSize: `${fontSize}px` }}
//         >
//           Dodaj przedmiot
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default Formular;
