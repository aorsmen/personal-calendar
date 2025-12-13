// import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import type { PickerValue } from "@mui/x-date-pickers/internals";
import dayjs from "dayjs";

const DateField = ({
  date,
  onChange,
}: {
  date: Date | undefined;
  onChange: (value: PickerValue) => void;
}) => {
  // const [isOpen, setIsOpen] = useState(false);
  const formDate = dayjs(date);

  // const focusHandler = () => {
  //   setIsOpen(true);
  // };

  // const closeHandler = () => {
  //   setIsOpen(false);
  // };

  return (
    <DatePicker
      label="Date"
      slotProps={{
        textField: {
          size: "small",
          sx: {
            flex: 1,
            "& .MuiPickersInputBase-root": { fontSize: ".875rem" },
          },
          // onFocus: focusHandler,
        },
        inputAdornment: { sx: { "& .MuiSvgIcon-root": { fontSize: "20px" } } },
      }}
      defaultValue={formDate}
      value={formDate}
      // open={isOpen}
      // onClose={closeHandler}
      onChange={onChange}
    />
  );
};

export default DateField;
