"use client";
import { authApi } from "@/lib/axios";
import { AuthContextValue, AuthUser, LoginPayload } from "@/type/auth";
import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

type AuthProviderProps = {
  readonly children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const isAuthenticated = !!user;

  const refreshUser = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await authApi.me();
      setUser(res.data.user);
    } catch (error: unknown) {
      // log the error and update state
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
      setUser(null);
      setError("Unable to restore session");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // avoid calling setState synchronously inside the effect to prevent
    // cascading renders — schedule refresh on next tick
    const id = setTimeout(() => {
      void refreshUser();
    }, 0);

    return () => clearTimeout(id);
  }, []);

  const login = async ({ email, password }: LoginPayload) => {
    console.log(email, password);

    try {
      setLoading(true);
      setError(null);

      const res = await authApi.login({ email, password });
      console.log(res.data.response, "Login response data");
      if (res.status === 200) {
        console.log(res.data, "Login response data");
        setUser(res.data.user);
        router.push("/dashboard");
        await refreshUser();
      }
    } catch (err: unknown) {
      setUser(null);
      let errorMessage = "Login failed";

      // Check for axios error response FIRST
      if (typeof err === "object" && err !== null && "response" in err) {
        const response = (err as { response?: { data?: { error?: string } } })
          .response;
        errorMessage = response?.data?.error || errorMessage;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }

      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      setError(null);

      // later: call a /auth/logout endpoint here
      authApi.logout();
      router.push("/login");
      setUser(null);
    } catch (err) {
      setError("Logout failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const value: AuthContextValue = {
    user,
    loading,
    error,
    login,
    logout,
    refreshUser,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
