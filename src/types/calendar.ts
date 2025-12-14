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

export type CalendarCtxType = {
  events: CalendarEventType[];
  activeEvent: CalendarEventType | null;
  addEvent: (event: CalendarEventType) => void;
  updateEvent: (event: CalendarEventType) => void;
  deleteEvent: (id: string) => void;
  setActiveEvent: React.Dispatch<
    React.SetStateAction<CalendarEventType | null>
  >;
  getEvent: (id: string) => CalendarEventType | null;
};
