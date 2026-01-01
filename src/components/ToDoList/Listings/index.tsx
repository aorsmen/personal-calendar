import { Box, Grid } from "@mui/material";
import ListingItem from "../ListingItem";
import useToDoList from "../../../hooks/useToDoList";
import ListDetail from "../ListDetail";

const Listings = () => {
  const { lists, activeList, setActiveList } = useToDoList();
  const isDetailOpen = activeList !== "";

  return (
    <>
      <Box sx={{ padding: "20px" }}>
        <Grid container spacing={2}>
          {lists.map((lst) => (
            <ListingItem key={lst.id} item={lst} />
          ))}
        </Grid>
      </Box>
      <ListDetail isOpen={isDetailOpen} onClose={() => setActiveList("")} />
    </>
  );
};

export default Listings;
