import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  FormControl,
  Stack,
  Button,
  // Switch,
  // FormControlLabel,
  // Select,
  // MenuItem,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DateField from "../../UI/DateField";
import TimeField from "../../UI/TimeField";
import useCalendar from "../../../hooks/useCalendar";
import type React from "react";
import type { CalendarEventType } from "../../../types/calendar";

const EventForm = ({ data }: { data: CalendarEventType }) => {
  const { setActiveEvent, updateEvent } = useCalendar();
  const [currentEvent, setCurrentEvent] = useState(data);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (currentEvent?.title && currentEvent?.start && currentEvent?.end) {
      updateEvent(currentEvent);
      setActiveEvent(null);
    }
  };

  useEffect(() => {
    if (data.id !== currentEvent.id) {
      setCurrentEvent(data);
    }
  }, [data.id]);

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form onSubmit={submitHandler}>
          <FormControl fullWidth>
            <TextField
              size="small"
              label="Event title"
              variant="outlined"
              defaultValue={currentEvent?.title}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const value = event.currentTarget.value;
                setCurrentEvent((prev) => ({
                  ...prev,
                  title: value,
                }));
              }}
            />
          </FormControl>
          <FormControl sx={{ marginTop: "15px", width: "100%" }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <DateField
                date={currentEvent?.start}
                onChange={(value) => {
                  setCurrentEvent((prev) => ({
                    ...prev,
                    start: value?.toDate(),
                  }));
                }}
              />
              {currentEvent?.allDay && (
                <DateField
                  date={currentEvent?.end}
                  onChange={(value) => {
                    setCurrentEvent((prev) => ({
                      ...prev,
                      end: value?.toDate(),
                    }));
                  }}
                />
              )}
            </Stack>
          </FormControl>
          {!currentEvent?.allDay && (
            <FormControl fullWidth sx={{ marginTop: "15px" }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <TimeField
                  label="Start"
                  time={dayjs(currentEvent?.start)}
                  onChange={(value) => {
                    const startTime = dayjs(value);
                    setCurrentEvent((prev) => {
                      const updVals = { ...prev };

                      if (prev?.start) {
                        const start = dayjs(prev.start)
                          .set("hour", startTime.hour())
                          .set("minute", startTime.minute());
                        updVals.start = start.toDate();
                      }

                      if (
                        prev?.end &&
                        (startTime.isAfter(prev.end) ||
                          startTime.isSame(prev.end))
                      ) {
                        updVals.end = startTime.add(1, "minute").toDate();
                      }

                      return updVals;
                    });
                  }}
                  maxTime={dayjs(currentEvent?.end)}
                />
                <TimeField
                  label="End"
                  time={dayjs(currentEvent?.end)}
                  onChange={(value) => {
                    const endTime = dayjs(value);
                    setCurrentEvent((prev) => {
                      const updVals = { ...prev };

                      if (prev?.end) {
                        updVals.end = dayjs(prev.end)
                          .set("hour", endTime.hour())
                          .set("minute", endTime.minute())
                          .toDate();
                      }

                      if (
                        prev?.start &&
                        (endTime.isBefore(prev.start) ||
                          endTime.isSame(prev.start))
                      ) {
                        updVals.end = endTime.subtract(1, "minute").toDate();
                      }

                      return updVals;
                    });
                  }}
                  minTime={dayjs(currentEvent?.start)}
                />
              </Stack>
            </FormControl>
          )}
          {/* <FormControl fullWidth sx={{ marginTop: "15px" }}>
          <FormControlLabel
            control={
              <Switch
                size="small"
                sx={{ marginLeft: "10px" }}
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>,
                  checked: boolean
                ) => {
                  setCurrentEvent((prev) => ({
                    ...prev,
                    allDay: checked,
                  }));
                }}
              />
            }
            label="All Day"
            labelPlacement="start"
          />
        </FormControl> */}
          <Stack
            direction="row"
            justifyContent="flex-end"
            sx={{ marginTop: "15px" }}
          >
            <Button variant="contained" size="small" type="submit">
              Save
            </Button>
          </Stack>
        </form>
      </LocalizationProvider>
    </Box>
  );
};

export default EventForm;
