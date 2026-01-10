import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChecklistIcon from "@mui/icons-material/Checklist";
import NotesIcon from "@mui/icons-material/Notes";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import type { HomeAppType } from "../types/home";

export const HOME_APPS: HomeAppType[] = [
  { title: "Calendar", url: "/calendar", icon: CalendarMonthIcon },
  { title: "To Do List", url: "/to-do-list", icon: ChecklistIcon },
  { title: "Notes", url: "/notes", icon: NotesIcon },
  { title: "Upcommings", url: "/upcommings", icon: UpcomingIcon },
];
