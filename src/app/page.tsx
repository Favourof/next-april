"use client";
import { authApi } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await authApi.me();
        console.log(response.data.user, "API response data");

        setUser(response.data.user);
      } catch (error) {
        router.push("/login");
        console.error("Failed to fetch user:", error);
      }
    };
    fetchUser();
  }, []);

  // watch for user changes
  useEffect(() => {
    if (user) {
      console.log(user.name, "user after state update");
    }
  }, [user]);

  return (
    <div>
      <h1>Hello world</h1>
      {user && <p>Welcome, {user.name}</p>}
      <p>{user?.email}</p>
    </div>
  );
}
