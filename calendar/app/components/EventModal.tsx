"use client";

import { useState } from "react";
import API from "@/app/utils/api";

export default function EventModal({ date, onClose }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    await API.post("/events", {
      title,
      description,
      date,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-6 w-96 shadow-lg">
        <h2 className="text-lg font-bold mb-4">
          Add Event
        </h2>

        <p className="text-sm text-gray-500 mb-2">
          {new Date(date).toDateString()}
        </p>

        <input
          placeholder="Title"
          className="border w-full p-2 mb-3 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="border w-full p-2 mb-3 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-3 py-1 rounded border"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-[#FA812F] text-white px-4 py-1 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}