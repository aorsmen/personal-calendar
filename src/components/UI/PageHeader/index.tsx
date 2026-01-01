import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link as routerLink } from "react-router";

const PageHeader = ({ title, back }: { title: string; back?: string }) => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        {!!back && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={routerLink}
            to={back}
          >
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        )}
        <Typography
          variant="h1"
          component="div"
          sx={{ flexGrow: 1, fontSize: "2.4rem" }}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default PageHeader;
