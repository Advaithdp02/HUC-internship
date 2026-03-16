import { CalendarEvent } from "./types";

export const initialEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Team Sync",
    date: "2026-10-01",
    time: "10:00",
    description: "Weekly team sync meeting",
    color: "blue",
  },
  {
    id: "2",
    title: "Product Review",
    date: "2026-10-06",
    time: "14:00",
    description: "Discuss product changes and roadmap",
    color: "green",
  },
  {
    id: "3",
    title: "Stand-up Meeting",
    date: "2026-10-07",
    time: "09:00",
    description: "Daily stand-up with engineering team",
    color: "blue",
  },
  {
    id: "4",
    title: "Design Review",
    date: "2026-10-07",
    time: "15:00",
    description: "Review latest design updates",
    color: "amber",
  },
];