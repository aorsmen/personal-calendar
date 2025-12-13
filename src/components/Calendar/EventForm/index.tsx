import {
  Box,
  TextField,
  FormControl,
  Stack,
  // Switch,
  // FormControlLabel,
  // Select,
  // MenuItem,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DateField from "../../UI/DateField";
import TimeField from "../../UI/TimeField";
import useCalendar from "../../../hooks/useCalendar";

const EventForm = () => {
  const { setActiveEvent, activeEvent } = useCalendar();

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormControl fullWidth>
          <TextField size="small" label="Event title" variant="outlined" />
        </FormControl>
        <FormControl sx={{ marginTop: "15px", width: "100%" }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <DateField
              date={activeEvent?.start}
              onChange={(value) => {
                setActiveEvent((prev) => ({
                  ...prev,
                  start: value?.toDate(),
                }));
              }}
            />
            {activeEvent?.allDay && (
              <DateField
                date={activeEvent?.end}
                onChange={(value) => {
                  setActiveEvent((prev) => ({
                    ...prev,
                    end: value?.toDate(),
                  }));
                }}
              />
            )}
          </Stack>
        </FormControl>
        {!activeEvent?.allDay && (
          <FormControl fullWidth sx={{ marginTop: "15px" }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <TimeField
                label="Start"
                time={activeEvent?.startTime}
                onChange={(value) => {
                  setActiveEvent((prev) => ({
                    ...prev,
                    startTime: value?.toString(),
                  }));
                }}
              />
              <TimeField
                label="End"
                time={activeEvent?.endTime}
                onChange={(value) => {
                  setActiveEvent((prev) => ({
                    ...prev,
                    endTime: value?.toString(),
                  }));
                }}
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
                  setActiveEvent((prev) => ({
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
      </LocalizationProvider>
    </Box>
  );
};

export default EventForm;
