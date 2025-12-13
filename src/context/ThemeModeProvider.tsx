import { createContext, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "../config/theme";

interface Props {
  children: React.ReactNode;
}

export const ThemeModeContext = createContext({
  toggleColorMode: () => {},
  mode: "light" as "light" | "dark",
});

function ThemeModeProvider({ children }: Props) {
  const [mode, setMode] = useState<"light" | "dark">(
    () => (localStorage.getItem("themeMode") as "light" | "dark") || "light"
  );

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prev) => {
          const next = prev === "light" ? "dark" : "light";
          localStorage.setItem("themeMode", next);
          return next;
        });
      },
    }),
    [mode]
  );

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ThemeModeContext value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext>
  );
}

export default ThemeModeProvider;
