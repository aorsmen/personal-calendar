import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import ThemeModeProvider from "./context/ThemeModeProvider";

// Route Imports
const Home = lazy(() => import("./pages/Home"));
const CalendarPage = lazy(() => import("./pages/CalendarPage"));

function App() {
  return (
    <ThemeModeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="calendar" element={<CalendarPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeModeProvider>
  );
}

export default App;
