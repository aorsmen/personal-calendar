import { Stack, Box } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import gbLocale from "@fullcalendar/core/locales/en-gb";
import type { DateClickArg } from "@fullcalendar/interaction";
import Sidebar from "../Sidebar";
import useCalendar from "../../../hooks/useCalendar";
import { v7 } from "uuid";

const CalendarMain = () => {
  const { setActiveEvent } = useCalendar();

  return (
    <Stack direction="row">
      <Box sx={{ flex: 1 }}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          locale={gbLocale}
          firstDay={1}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          eventClick={() => console.log("CLICK EVENT")}
          eventAdd={() => console.log("ADD EVENT")}
          dateClick={(arg: DateClickArg) => {
            setActiveEvent({ id: v7(), start: arg.date });
          }}
          customButtons={{
            addEventButton: {
              text: "Add Event",
              click: () => {
                setActiveEvent({ id: v7() });
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
