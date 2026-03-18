"use client";

import dayjs from "dayjs";

export default function Calendar({
  onDateClick,
  events,
  currentMonth,
  setCurrentMonth,
}: any) {
  const startOfMonth = currentMonth.startOf("month");
  const daysInMonth = currentMonth.daysInMonth();

  const startDay = startOfMonth.day();

  const daysArray = [];

  for (let i = 0; i < startDay; i++) {
    daysArray.push(null);
  }

  for (let i = 0; i < daysInMonth; i++) {
    daysArray.push(startOfMonth.add(i, "day"));
  }

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="p-4">

      {/* 🔥 HEADER */}
      <div className="flex items-center justify-between mb-4">

        <h2 className="text-2xl font-bold">
          {currentMonth.format("MMMM YYYY")}
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
            className="px-3 py-1 bg-white rounded shadow hover:bg-gray-100"
          >
            ←
          </button>

          <button
            onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
            className="px-3 py-1 bg-white rounded shadow hover:bg-gray-100"
          >
            →
          </button>
        </div>
      </div>

      {/* WEEK HEADER */}
      <div className="grid grid-cols-7 mb-2 text-center font-semibold">
        {weekDays.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-7 gap-2">
        {daysArray.map((day: any, index) => {
          if (!day) return <div key={index}></div>;

          const dayEvents = events.filter(
            (e: any) =>
              dayjs(e.date).format("YYYY-MM-DD") ===
              day.format("YYYY-MM-DD")
          );

          return (
            <div
              key={index}
              onClick={() => onDateClick(day)}
              className="bg-white rounded-xl p-2 h-28 shadow cursor-pointer hover:shadow-md"
            >
              <div className="text-sm font-semibold">
                {day.format("DD")}
              </div>

              <div className="mt-1 space-y-1 overflow-hidden">
                {dayEvents.slice(0, 2).map((event: any) => (
                  <div
                    key={event._id}
                    className="bg-[#FAB12F] text-xs px-1 rounded truncate"
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}