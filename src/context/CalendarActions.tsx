import { createContext, useState } from "react";
import type { CalendarCtxType, CalendarEventType } from "../types/calendar";

const INIT_STATE: CalendarCtxType = {
  events: [],
  activeEvent: null,
  addEvent: () => {},
  updateEvent: () => {},
  deleteEvent: () => {},
  setActiveEvent: () => {},
  getEvent: () => null,
};

export const CalendarActionsContext = createContext(INIT_STATE);

function CalendarActions({ children }: { children: React.ReactNode }) {
  const [events, setEvents] = useState(INIT_STATE.events);
  const [activeEvent, setActiveEvent] = useState(INIT_STATE.activeEvent);

  const addEvent = (event: CalendarEventType) => {
    setEvents((prev) => [...prev, event]);
  };

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  const updateEvent = (event: CalendarEventType) => {
    setEvents((prev) =>
      prev.map((evt) => (evt.id === event.id ? { ...evt, ...event } : evt))
    );
  };

  const getEvent = (id: string) => {
    const evt = events.filter((e) => e.id === id);

    if (evt.length > 0) {
      return evt[0];
    }

    return null;
  };

  return (
    <CalendarActionsContext
      value={{
        events,
        activeEvent,
        addEvent,
        deleteEvent,
        updateEvent,
        setActiveEvent,
        getEvent,
      }}
    >
      {children}
    </CalendarActionsContext>
  );
}

export default CalendarActions;
