import NavigationBar from "../components/navbar/Navbar";
// import Formular from "../components/plan/formular";
// import { useState, useEffect } from "react";
// import { getEventByUserId } from "../services/plan";
import EventCalendar from "../components/plan/EventCalendar";
const PlanPage = () => {
 // const [eventsData, setEventsData] = useState([]);
 // const userId = localStorage.getItem("id");

  // useEffect(() => {
  //   getEventByUserId(userId)
  //     .then((response) => {
  //       setEventsData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching events data:", error);
  //       window.location.href = "/plan";
  //     });
  // }, []);

  return (
    <>
      <NavigationBar />
      <EventCalendar/>
    </>
  );
};

export default PlanPage;
