import { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import type { CalendarEventType } from "../../../types/calendar";
import dayjs from "dayjs";
import useCalendar from "../../../hooks/useCalendar";
import Confirmation from "../../UI/Confirmation";

const EventInfo = ({ data }: { data: CalendarEventType }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { setActiveEvent, deleteEvent } = useCalendar();

  const editEventHandler = () => {
    setActiveEvent({ ...data }, true);
  };

  const deleteEventHandler = () => {
    setConfirmDelete(true);
  };

  const confirmDeleteHandler = () => {
    if (data?.id) {
      deleteEvent(data.id);
    }
    setConfirmDelete(false);
  };

  return (
    <>
      <Box>
        <Typography component="h2" sx={{ fontWeight: 600, fontSize: "1.2rem" }}>
          {data.title}
        </Typography>
        <List>
          <ListItem sx={{ paddingInline: 0 }}>
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <CalendarTodayIcon color="primary" fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              {dayjs(data.start).format("DD MMMM YYYY")}
            </ListItemText>
          </ListItem>
          <ListItem sx={{ paddingInline: 0 }}>
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <AccessTimeIcon color="primary" fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              {`${dayjs(data.start).format("HH:mm")} - ${dayjs(data.end).format(
                "HH:mm"
              )}`}
            </ListItemText>
          </ListItem>
        </List>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          spacing={1}
        >
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={deleteEventHandler}
          >
            Delete
          </Button>
          <Button size="small" variant="contained" onClick={editEventHandler}>
            Edit
          </Button>
        </Stack>
      </Box>
      <Confirmation
        isOpen={confirmDelete}
        onClose={() => setConfirmDelete(false)}
        onConfirm={confirmDeleteHandler}
        buttons={{ no: "Cancel", yes: "Delete" }}
        confirmColor="error"
      >
        <Alert severity="error">
          <AlertTitle>Are you sure?</AlertTitle>
          Are you sure to delete this event? This action cannot be undone.
        </Alert>
      </Confirmation>
    </>
  );
};

export default EventInfo;
