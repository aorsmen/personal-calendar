import { useContext } from "react";
import { CalendarActionsContext } from "../context/CalendarActions";
import type { CalendarCtxType } from "../types/calendar";

const useCalendar = (): CalendarCtxType => {
  const ctx = useContext(CalendarActionsContext);

  return ctx;
};

export default useCalendar;
