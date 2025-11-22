import { useCallback, useState } from "react";
import { Calendar } from "react-big-calendar";
import "../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
import { dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enGB } from "date-fns/locale/en-GB";
import { v7 } from "uuid";

type EventType = {
  id: string;
  title: string;
  start: Date;
  end: Date;
};

const locales = {
  "en-GB": enGB,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function App() {
  const [myEvents, setEvents] = useState<EventType[]>([]);

  const handleSelectSlot = useCallback(
    ({ start, end }: { start: Date; end: Date }) => {
      const title = "";
      const id = v7();
      console.log("Selected slot:", { start, end });

      if (title) {
        setEvents((prev) => [...prev, { id, start, end, title }]);
      }
    },
    [setEvents]
  );

  const handleSelectEvent = useCallback(
    (event: EventType) => window.alert(event.title),
    []
  );

  return (
    <div style={{ height: "calc(100dvh - 20px)", padding: "10px" }}>
      <Calendar
        localizer={localizer}
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        selectable
      />
    </div>
  );
}

export default App;
