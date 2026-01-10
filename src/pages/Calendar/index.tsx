import { Box } from "@mui/material";
import CalendarMain from "../../components/Calendar/CalendarMain";
import CalendarActions from "../../context/CalendarActions";
import PageHeader from "../../components/UI/PageHeader";

function Calendar() {
  return (
    <CalendarActions>
      <PageHeader title="Calendar" back="/" />
      <Box sx={{ padding: "16px" }}>
        <CalendarMain />
      </Box>
    </CalendarActions>
  );
}

export default Calendar;
