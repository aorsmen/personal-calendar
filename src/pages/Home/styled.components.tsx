import { Stack, ButtonBase, Typography, Paper } from "@mui/material";
import { Link as RouterLink } from "react-router";
import type { HomeAppType } from "../../types/home";
import { SECONDARY_COLOR } from "../../config/theme";

export const HomeContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={8}
      sx={{ height: "100dvh", width: "100%" }}
    >
      {children}
    </Stack>
  );
};

export const AppLink = ({ app }: { app: HomeAppType }) => {
  const { url, title, icon: Icon } = app;
  return (
    <Paper
      elevation={6}
      sx={{ background: SECONDARY_COLOR, borderRadius: "10px" }}
    >
      <ButtonBase
        component={RouterLink}
        to={url}
        sx={{
          display: "inline-flex",
          width: "200px",
          height: "200px",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "#FFF",
        }}
      >
        <Icon sx={{ fontSize: "64px", marginBottom: "10px" }} />
        <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
          {title}
        </Typography>
      </ButtonBase>
    </Paper>
  );
};
