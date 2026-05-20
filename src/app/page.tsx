"use client";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

export default function Home() {
  const { user } = useContext(AuthContext)!;

  return (
    <div>
      <h1>Hello world</h1>
      {user && <p>Welcome, {user?.name}</p>}
      <p>{user?.email}</p>
    </div>
  );
}
