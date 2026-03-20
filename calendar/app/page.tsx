"use client";

import { useEffect, useState } from "react";
import Calendar from "./components/Calendar";
import EventModal from "./components/EventModal";
import Navbar from "./components/Navbar";
import API from "./utils/api";
import dayjs from "dayjs";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const fetchEvents = async () => {
    try {
      const res = await API.get("/events");
      setEvents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="bg-[#FEF3E2] min-h-screen">
      <Navbar />

      <Calendar
        events={events}
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}

 
        onDateClick={(date: any) => {
          setSelectedEvent(null);
          setSelectedDate(date);
          setShowModal(true);
        }}

  
        onEventClick={(event: any) => {
          setSelectedEvent(event);
          setSelectedDate(null);
          setShowModal(true);
        }}
      />


      {showModal && (
        <EventModal
          event={selectedEvent}
          date={selectedDate}
          onClose={() => {
            setShowModal(false);
            setSelectedDate(null);
            setSelectedEvent(null);
            fetchEvents(); // 🔥 refresh after add/edit/delete
          }}
        />
      )}
    </div>
  );
}