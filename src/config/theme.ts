import { createTheme } from "@mui/material/styles";

export const NOTES_YELLOW = "#fdeda3";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4479c9",
      light: "#4e83d3",
      dark: "#588ddd",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#36485a",
      light: "#2c3e50",
      dark: "#223446",
      contrastText: "#ffffff",
    },
    error: {
      main: "#c50000",
    },
    warning: {
      main: NOTES_YELLOW,
    },
    info: {
      main: "#0288d1",
    },
    success: {
      main: "#2e7d32",
    },
    background: {
      default: "#f5f7fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#1e1e1e",
      secondary: "#555",
    },
  },

  typography: {
    fontFamily: `'Inter', 'Roboto', sans-serif`,
    h1: { fontSize: "3rem", fontWeight: 700 },
    h2: { fontSize: "2.25rem", fontWeight: 700 },
    h3: { fontSize: "1.75rem", fontWeight: 600 },
    h4: { fontSize: "1.5rem", fontWeight: 600 },
    h5: { fontSize: "1.25rem", fontWeight: 500 },
    h6: { fontSize: "1rem", fontWeight: 500 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    body2: { fontSize: "0.875rem", lineHeight: 1.5 },
    button: { fontWeight: 600, textTransform: "none" },
  },

  shape: {
    borderRadius: 5,
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          paddingInline: "0.75rem",
          paddingBlock: "0.25rem",
        },
        containedPrimary: {
          boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 5,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
          border: "1px solid #dddddd",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#90caf9",
      light: "#e3f2fd",
      dark: "#42a5f5",
      contrastText: "#0d1117",
    },

    secondary: {
      main: "#728496",
      light: "#5e7082",
      dark: "#4a5c6e",
      contrastText: "#0d1117",
    },

    error: {
      main: "#c50000",
    },
    warning: {
      main: NOTES_YELLOW,
    },
    info: {
      main: "#4fc3f7",
    },
    success: {
      main: "#81c784",
    },

    background: {
      default: "#0d1117", // dark canvas
      paper: "#161b22", // elevated surfaces
    },

    text: {
      primary: "#e6edf3",
      secondary: "#9da7b3",
      disabled: "#6b7280",
    },
  },

  typography: {
    fontFamily: `'Inter', 'Roboto', sans-serif`,
    h1: { fontSize: "3rem", fontWeight: 700 },
    h2: { fontSize: "2.25rem", fontWeight: 700 },
    h3: { fontSize: "1.75rem", fontWeight: 600 },
    h4: { fontSize: "1.5rem", fontWeight: 600 },
    h5: { fontSize: "1.25rem", fontWeight: 500 },
    h6: { fontSize: "1rem", fontWeight: 500 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    body2: { fontSize: "0.875rem", lineHeight: 1.5 },
    button: { fontWeight: 600, textTransform: "none" },
  },

  shape: {
    borderRadius: 5,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          paddingInline: "1.25rem",
          paddingBlock: "0.5rem",
        },
        containedPrimary: {
          boxShadow: "0 3px 6px rgba(0,0,0,0.45)",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 5,
        },
        root: {
          backgroundImage: "none", // remove hard gradients
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
          border: "1px solid #dddddd",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#161b22",
          boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
        },
      },
    },
  },
});
