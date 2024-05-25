import { createContext, useContext, useState } from 'react';

const EventsContext = createContext();

const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const removeEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  return (
    <EventsContext.Provider value={{ events, addEvent, removeEvent }}>
      {children}
    </EventsContext.Provider>
  );
};

const useEvents = () => {
  return useContext(EventsContext);
};

export { EventsProvider, useEvents };
