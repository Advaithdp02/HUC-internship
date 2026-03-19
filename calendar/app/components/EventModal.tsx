"use client";

import { useState } from "react";
import API from "@/app/utils/api";

export default function EventModal({ date: initialDate, onClose }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // If date is passed → use it, else empty
  const [date, setDate] = useState(
    initialDate
      ? new Date(initialDate).toISOString().split("T")[0]
      : ""
  );

  const handleSubmit = async () => {
    if (!title.trim() || !date) return;

    await API.post("/events", {
      title,
      description,
      date,
    });

    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[420px] rounded-2xl shadow-xl p-6"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add Event</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Title */}
        <input
          placeholder="Event title"
          className="w-full border border-gray-200 focus:border-[#FA812F] focus:ring-1 focus:ring-[#FA812F] outline-none p-2.5 mb-3 rounded-lg text-sm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Date Section */}
        <div className="mb-3">
          <label className="text-sm text-gray-500 block mb-1">
            {initialDate ? "Event Date" : "Select Date"}
          </label>

          {initialDate ? (
            // If date is passed → show formatted date (readonly)
            <div className="p-2.5 border rounded-lg text-sm bg-gray-50">
              {new Date(date).toDateString()}
            </div>
          ) : (
            // Else → allow picking date
            <input
              type="date"
              className="w-full border border-gray-200 p-2.5 rounded-lg text-sm focus:border-[#FA812F] focus:ring-1 focus:ring-[#FA812F] outline-none"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          )}
        </div>

        {/* Description */}
        <textarea
          placeholder="Add description..."
          rows={3}
          className="w-full border border-gray-200 p-2.5 mb-4 rounded-lg text-sm focus:border-[#FA812F] focus:ring-1 focus:ring-[#FA812F] outline-none resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Actions */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm border hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={!title || !date}
            className="bg-[#FA812F] hover:bg-[#e56f1f] disabled:opacity-50 text-white px-5 py-2 rounded-lg text-sm font-medium transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}