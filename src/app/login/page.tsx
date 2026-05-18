"use client";
import { authApi } from "@/lib/axios";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const router = useRouter();
  const { login, error, loading } = useContext(AuthContext)!;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData);
      router.push("/dashboard");
    } catch (err) {
      // context already tracks the error
      console.error(err);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto p-6 border rounded"
    >
      <h2 className="text-xl font-bold">Login</h2>

      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {loading ? "logging in..." : "Login"}
      </button>

      {error && <p className="mt-2 text-center text-sm">{error}</p>}
    </form>
  );
};

export default LoginPage;
