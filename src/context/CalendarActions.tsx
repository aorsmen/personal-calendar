import { createContext, useState, useEffect } from "react";
import type {
  CalendarCtxType,
  CalendarEventType,
  CalendarEventsResponse,
} from "../types/calendar";
import { useQueryRequest } from "../hooks/useQueryRequest";
import { CALENDAR_API } from "../config/api";

const INIT_STATE: CalendarCtxType = {
  events: [],
  activeEvent: null,
  updateEvent: () => {},
  deleteEvent: () => {},
  setActiveEvent: () => {},
  getEvent: () => null,
};

export const CalendarActionsContext = createContext(INIT_STATE);

function CalendarActions({ children }: { children: React.ReactNode }) {
  const [events, setEvents] = useState(INIT_STATE.events);
  const [activeEvent, setActEvent] = useState(INIT_STATE.activeEvent);

  const { data } = useQueryRequest<CalendarEventsResponse>({
    queryKeys: `calendar-events-data`,
    url: CALENDAR_API.getEvents,
    queryConfig: {
      refetchInterval: 0,
    },
  });

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  const updateEvent = (event: CalendarEventType) => {
    setEvents((prev) => {
      const updEvents = [...prev];
      const inx = updEvents.findIndex((evt) => evt.id === event.id);

      if (inx !== -1) {
        updEvents[inx] = event;
      } else {
        updEvents.push(event);
      }

      return updEvents;
    });
  };

  const setActiveEvent = (
    event: CalendarEventType | null,
    isEditing: boolean = false
  ) => {
    setActEvent(event ? { event, isEditing } : null);
  };

  const getEvent = (id: string) => {
    const evt = events.filter((e) => e.id === id);

    if (evt.length > 0) {
      return evt[0];
    }

    return null;
  };

  useEffect(() => {
    if (data?.events) {
      setEvents(data.events);
    }
  }, [data]);

  return (
    <CalendarActionsContext
      value={{
        events,
        activeEvent,
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
