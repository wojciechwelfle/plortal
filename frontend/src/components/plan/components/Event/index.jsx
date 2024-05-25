import "./styles.css";

const Event = ({ id, event }) => {
  console.log(event);

  const startTime = new Date(event.startTime);
  const endTime = new Date(event.endTime);
  const startMinutes = startTime.getMinutes();
  const endMinutes = endTime.getMinutes();
  const top = startTime.getHours() * 60 + startMinutes;
  const height = (endTime - startTime) / 60 / 1000;
  return (
    <div
      className="event"
      id={id}
      style={{
        top: `${top}px`,
        height: `${height}px`,
      }}
    >
      <p>{event.name}</p>
    </div>
  );
};

export default Event;
