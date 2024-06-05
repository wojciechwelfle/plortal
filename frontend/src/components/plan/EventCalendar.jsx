import { Table, Container, Row, Col } from "react-bootstrap";
//import CalendarForm from "../CalendarForm";
import React, { useState, useEffect } from "react";
import Formular from "./formular";
import "./EventCalendar.css";
import { getEventByEmail } from "../../services/plan";

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const userMail = localStorage.getItem("email");

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
  useEffect(() => {
    getEventByEmail(userMail)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, [userMail]);

  const renderEventsForCell = (day, hour) => {
    return events
      .filter(event => event.day === day && event.startTime === hour)
      .map((event, index) => (
        <div key={index} className="event">
          {event.content}
        </div>
      ));
  };

  return (
    <div className="row">
      ,
      <div className="col mx-auto">
        <div className="calendar ">
          <Container style={{ marginTop: "10px" }}>
            <Row>
              <Col>
                <Table >
                  <thead>
                    <tr >
                      <th></th>
                      {daysOfWeek.map((day) => (
                        <th key={day}>{day}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {hoursOfDay.map((hour) => (
                      <tr key={hour} className="cell">
                        <td>{hour}</td>
                        {daysOfWeek.map((day) => (
                          <td key={day}>{renderEventsForCell(day, hour)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="col mx-auto">
        <Formular daysOfWeek={daysOfWeek} hoursOfDay={hoursOfDay} />
      </div>
    </div>
  );
};

export default EventCalendar;

// import React from "react";
// import PropTypes from "prop-types";
// import clsx from "clsx";
// import {
//   eachDayOfInterval,
//   endOfMonth,
//   format,
//   getDay,
//   isToday,
//   startOfMonth,
// } from "date-fns";

// const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// const EventCalendar = ({ events }) => {
//   const currentDate = new Date();
//   const firstDayOfMonth = startOfMonth(currentDate);
//   const lastDayOfMonth = endOfMonth(currentDate);

//   const daysInMonth = eachDayOfInterval({
//     start: firstDayOfMonth,
//     end: lastDayOfMonth,
//   });

//   const startingDayIndex = getDay(firstDayOfMonth);

//   const eventsByDate = React.useMemo(() => {
//     return events.reduce((acc, event) => {
//       const dateKey = format(event.date, "yyyy-MM-dd");
//       if (!acc[dateKey]) {
//         acc[dateKey] = [];
//       }
//       acc[dateKey].push(event);
//       return acc;
//     }, {});
//   }, [events]);

//   return (
//     <div className="container mx-auto p-4">
//       <div className="mb-4">
//         <h2 className="text-center">{format(currentDate, "MMMM yyyy")}</h2>
//       </div>
//       <div className="grid grid-cols-7 gap-2">
//         {WEEKDAYS.map((day) => (
//           <div key={day} className="font-bold text-center">
//             {day}
//           </div>
//         ))}
//         {Array.from({ length: startingDayIndex }).map((_, index) => (
//           <div
//             key={`empty-${index}`}
//             className="border rounded-md p-2 text-center"
//           />
//         ))}
//         {daysInMonth.map((day, index) => {
//           const dateKey = format(day, "yyyy-MM-dd");
//           const todaysEvents = eventsByDate[dateKey] || [];
//           return (
//             <div
//               key={index}
//               className={clsx("border rounded-md p-2 text-center", {
//                 "bg-gray-200": isToday(day),
//                 "text-gray-900": isToday(day),
//               })}
//             >
//               {format(day, "d")}
//               {todaysEvents.map((event) => (
//                 <div
//                   key={event.title}
//                   className="bg-green-500 rounded-md text-gray-900"
//                 >
//                   {event.title}
//                 </div>
//               ))}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// // Definiowanie typów za pomocą PropTypes
// EventCalendar.propTypes = {
//   events: PropTypes.arrayOf(
//     PropTypes.shape({
//       date: PropTypes.instanceOf(Date).isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default EventCalendar;
