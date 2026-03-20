"use client";

import { useState, useEffect } from "react";
import API from "@/app/utils/api";

export default function EventModal({ event, date: initialDate, onClose }: any) {
  const isEdit = !!event;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(
    initialDate
      ? new Date(initialDate).toISOString().split("T")[0]
      : ""
  );

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setDescription(event.description || "");
      setDate(new Date(event.date).toISOString().split("T")[0]);
    }
  }, [event]);

  const handleSubmit = async () => {
    if (!title.trim() || !date) return;

    if (isEdit) {
      await API.put(`/events/${event._id}`, {
        title,
        description,
        date,
      });
    } else {
      await API.post("/events", {
        title,
        description,
        date,
      });
    }

    onClose();
  };

  const handleDelete = async () => {
    if (!event) return;
    await API.delete(`/events/${event._id}`);
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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            {isEdit ? "Edit Event" : "Add Event"}
          </h2>
          <button onClick={onClose} className="text-gray-400 text-xl">
            ✕
          </button>
        </div>

        <input
          placeholder="Event title"
          className="w-full border p-2 mb-3 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          className="w-full border p-2 mb-3 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="w-full border p-2 mb-4 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex justify-between">
          {isEdit && (
            <button
              onClick={handleDelete}
              className="text-red-500"
            >
              Delete
            </button>
          )}

          <div className="flex gap-2 ml-auto">
            <button onClick={onClose}>Cancel</button>
            <button onClick={handleSubmit}>
              {isEdit ? "Update" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}