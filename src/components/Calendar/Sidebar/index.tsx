import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useCalendar from "../../../hooks/useCalendar";
import EventForm from "../EventForm";
import EventInfo from "../EventInfo";

const Sidebar = () => {
  const { setActiveEvent, activeEvent } = useCalendar();

  return activeEvent ? (
    <Box
      sx={{
        width: "100%",
        maxWidth: 350,
        marginLeft: "16px",
        paddingTop: "70px",
      }}
    >
      <Card sx={{ backgroundColor: "#f5f7fa", height: "100%" }}>
        <CardHeader
          sx={{ padding: "4px 4px 4px 8px" }}
          title={
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography sx={{ fontSize: ".875rem", fontWeight: 600 }}>
                Event Details
              </Typography>
              <IconButton onClick={() => setActiveEvent(null)}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Stack>
          }
        />
        <CardContent sx={{ borderTop: "1px solid #dddddd" }}>
          {activeEvent.isEditing ? (
            <EventForm data={activeEvent.event} />
          ) : (
            <EventInfo data={activeEvent.event} />
          )}
        </CardContent>
      </Card>
    </Box>
  ) : (
    <></>
  );
};

export default Sidebar;
