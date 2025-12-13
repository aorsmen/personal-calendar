import { useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";

type RecurrenceOptions =
  | "none"
  | "daily"
  | "weekly"
  | "monthly"
  | "annually"
  | "custom";

const RecurrenceField = () => {
  const [recOptions, setRecOptions] = useState<RecurrenceOptions>("none");

  const changeHandler = (event: SelectChangeEvent) => {
    setRecOptions(event.target.value as RecurrenceOptions);
  };

  return (
    <FormControl fullWidth>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={recOptions}
        label="Recurrence"
        onChange={changeHandler}
      >
        <MenuItem value="none">Does not repeat</MenuItem>
        <MenuItem value="daily">Daily</MenuItem>
        <MenuItem value="weekly">Weekly</MenuItem>
        <MenuItem value="monthly">Monthly</MenuItem>
        <MenuItem value="annually">Annually</MenuItem>
        <MenuItem value="custom">Custom...</MenuItem>
      </Select>
    </FormControl>
  );
};

export default RecurrenceField;
