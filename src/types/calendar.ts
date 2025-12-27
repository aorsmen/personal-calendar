import { Dayjs } from "dayjs";

export type CalendarEventType = {
  id?: string;
  title?: string;
  groupId?: string;
  start?: Date;
  end?: Date;
  allDay?: boolean;
  startTime?: Dayjs | null;
  endTime?: Dayjs | null;
  startRecur?: Date;
  endRecur?: Date;
  daysOfWeek?: number[];
};

export type ActiveEventType = {
  event: CalendarEventType;
  isEditing: boolean;
};

export type CalendarCtxType = {
  events: CalendarEventType[];
  activeEvent: ActiveEventType | null;
  updateEvent: (event: CalendarEventType) => void;
  deleteEvent: (id: string) => void;
  setActiveEvent: (
    event: CalendarEventType | null,
    isEditing?: boolean
  ) => void;
  getEvent: (id: string) => CalendarEventType | null;
};

export type CalendarEventsResponse = {
  events: CalendarEventType[];
};
