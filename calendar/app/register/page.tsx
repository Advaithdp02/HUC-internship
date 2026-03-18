"use client";

import { useState } from "react";
import API from "../utils/api";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
      });

      router.push("/login");
    } catch (err: any) {
      alert(err?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#FEF3E2] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center mb-2"
            style={{ fontFamily: "Poppins" }}>
          Create Account 🚀
        </h1>

        <p className="text-center text-gray-500 mb-6"
           style={{ fontFamily: "Inter" }}>
          Start managing your schedule
        </p>

        <div className="space-y-4">
          <input
            placeholder="Name"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FAB12F]"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FAB12F]"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FAB12F]"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleRegister}
          className="w-full mt-6 bg-[#FAB12F] hover:bg-[#e0a020] text-white py-2 rounded-lg"
        >
          Register
        </button>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-[#DD0303] cursor-pointer font-semibold hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}