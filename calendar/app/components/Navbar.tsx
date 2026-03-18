"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const token = typeof window !== "undefined" && localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="flex justify-between p-4 border-b">
      <h1 className="text-xl font-bold">Calendar</h1>

      {token ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-1 rounded"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => router.push("/login")}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Login
        </button>
      )}
    </div>
  );
}