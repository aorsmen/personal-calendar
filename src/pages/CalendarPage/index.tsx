import { Box } from "@mui/material";
import CalendarMain from "../../components/Calendar/CalendarMain";
import CalendarActions from "../../context/CalendarActions";

function CalendarPage() {
  return (
    <Box sx={{ padding: "16px" }}>
      <CalendarActions>
        <CalendarMain />
      </CalendarActions>
    </Box>
  );
}

export default CalendarPage;
