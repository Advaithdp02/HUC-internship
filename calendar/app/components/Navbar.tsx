"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import EventModal from "./EventModal";

export default function Navbar() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setToken(localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    router.push("/login");
  };

  if (!mounted) return null; // 🚀 prevents hydration mismatch

  return (
    <>
      <div className="flex justify-between items-center px-6 py-3 border-b bg-white shadow-sm">
        <h1 className="text-xl font-semibold">Calendar</h1>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            + Add Event
          </button>

          {token ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {showModal && (
        <EventModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
}