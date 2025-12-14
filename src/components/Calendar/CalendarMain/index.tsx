import { useRef } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Stack, Box } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { DateClickArg } from "@fullcalendar/interaction";
import Sidebar from "../Sidebar";
import useCalendar from "../../../hooks/useCalendar";
import { v7 } from "uuid";

const CalendarMain = () => {
  const { setActiveEvent, events } = useCalendar();
  const currentTime = useRef<Dayjs>(null);

  return (
    <Stack direction="row">
      <Box sx={{ flex: 1 }}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          firstDay={1}
          initialView="dayGridMonth"
          events={events}
          eventTimeFormat={{
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }}
          eventClick={() => console.log("CLICK EVENT")}
          dateClick={(arg: DateClickArg) => {
            currentTime.current = dayjs();
            const argDate = dayjs(arg.date);
            const str = argDate
              .set("hour", currentTime.current.hour())
              .set("minute", currentTime.current.minute());
            const end = argDate
              .set("hour", currentTime.current.hour())
              .set("minute", currentTime.current.minute() + 1);
            setActiveEvent({
              id: v7(),
              start: str.toDate(),
              end: end.toDate(),
            });
          }}
          customButtons={{
            addEventButton: {
              text: "Add Event",
              click: () => {
                currentTime.current = dayjs();
                const end = currentTime.current.add(1, "minute");
                setActiveEvent({
                  id: v7(),
                  start: currentTime.current.toDate(),
                  end: end.toDate(),
                });
              },
            },
          }}
          headerToolbar={{
            center: "addEventButton",
          }}
        />
      </Box>
      <Sidebar />
    </Stack>
  );
};

export default CalendarMain;
