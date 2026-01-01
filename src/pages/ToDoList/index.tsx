import { Box } from "@mui/material";
import ToDoListActionsActions from "../../context/ToDoListActions";
import Listings from "../../components/ToDoList/Listings";
import PageHeader from "../../components/UI/PageHeader";

const ToDoList = () => {
  return (
    <ToDoListActionsActions>
      <Box>
        <PageHeader title="To Do List" back="/" />
        <Listings />
      </Box>
    </ToDoListActionsActions>
  );
};

export default ToDoList;
