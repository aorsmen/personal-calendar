import { styled, Paper, Typography } from "@mui/material";
import { NOTES_YELLOW } from "../../../config/theme";

export const ListItemWrapper = styled(Paper)({
  width: "100%",
  padding: "10px",
  height: "120px",
  backgroundColor: NOTES_YELLOW,
  cursor: "pointer",

  // key: allow a filler area after the text
  display: "flex",
  flexDirection: "column",

  // make the line spacing deterministic
  "--lh": "1.25rem", // adjust to match your Typography line-height
  lineHeight: "var(--lh)",

  // optional: hide overflow if title is very long
  overflow: "hidden",

  // filler with ruled lines
  "&::after": {
    content: '""',
    flex: "1 1 auto",
    display: "block",
    mt: "2px", // optional small gap after text

    background: `repeating-linear-gradient(
      to bottom,
      transparent 0,
      transparent calc(var(--lh) - 1px),
      rgba(0,0,0,0.25) calc(var(--lh) - 1px),
      rgba(0,0,0,0.25) var(--lh)
    )`,
  },
});

export const ListItemTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: ".875rem",
  lineHeight: "var(--lh)",
});
