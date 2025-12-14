import { TimePicker } from "@mui/x-date-pickers";
import type { PickerValue } from "@mui/x-date-pickers/internals";
import dayjs, { Dayjs } from "dayjs";

const TimeField = ({
  label,
  time,
  onChange,
  minTime,
  maxTime,
}: {
  label: string;
  time: Dayjs;
  onChange: (value: PickerValue) => void;
  minTime?: Dayjs | undefined;
  maxTime?: Dayjs | undefined;
}) => {
  const formTime = dayjs(time);
  return (
    <TimePicker
      slotProps={{
        textField: {
          size: "small",
          sx: { "& .MuiPickersInputBase-root": { fontSize: ".875rem" } },
        },
        inputAdornment: { sx: { "& .MuiSvgIcon-root": { fontSize: "16px" } } },
      }}
      label={label}
      defaultValue={formTime}
      onAccept={onChange}
      ampm={false}
      minTime={minTime}
      maxTime={maxTime}
    />
  );
};

export default TimeField;
