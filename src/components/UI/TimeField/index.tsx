import { TimePicker } from "@mui/x-date-pickers";
import type { PickerValue } from "@mui/x-date-pickers/internals";
import dayjs from "dayjs";

const TimeField = ({
  label,
  time,
  onChange,
}: {
  label: string;
  time: string | undefined;
  onChange: (value: PickerValue) => void;
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
    />
  );
};

export default TimeField;
