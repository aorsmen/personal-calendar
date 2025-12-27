import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import ThemeModeProvider from "./context/ThemeModeProvider";

// Route Imports
const Home = lazy(() => import("./pages/Home"));
const Calendar = lazy(() => import("./pages/Calendar"));
const Notes = lazy(() => import("./pages/Notes"));
const ToDoList = lazy(() => import("./pages/ToDoList"));
const Upcomings = lazy(() => import("./pages/Upcomings"));

function App() {
  return (
    <ThemeModeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="notes" element={<Notes />} />
          <Route path="to-do-list" element={<ToDoList />} />
          <Route path="upcomings" element={<Upcomings />} />
        </Routes>
      </BrowserRouter>
    </ThemeModeProvider>
  );
}

export default App;
