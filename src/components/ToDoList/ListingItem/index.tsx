import { Grid } from "@mui/material";
import type { ToDoListItem } from "../../../types/todoList";
import useToDoList from "../../../hooks/useToDoList";
import { ListItemWrapper, ListItemTitle } from "./styled.components";

const ListingItem = ({ item }: { item: ToDoListItem }) => {
  const { getListDetail } = useToDoList();

  const showDetailHandler = () => {
    getListDetail(item.id);
  };

  return (
    <Grid size={{ xs: 12, md: 6, lg: 3, xl: 2 }}>
      <ListItemWrapper elevation={2} onClick={showDetailHandler}>
        <ListItemTitle>{item.title}</ListItemTitle>
      </ListItemWrapper>
    </Grid>
  );
};

export default ListingItem;
