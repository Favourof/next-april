"use client";
import { authApi } from "@/lib/axios";
import { AuthContextValue, AuthUser, LoginPayload } from "@/type/auth";
import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "@/app/context/AuthContext";

type AuthProviderProps = {
  readonly children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isAuthenticated = !!user;

  const refreshUser = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await authApi.me();
      setUser(res.data.user);
    } catch (error) {
      // log the error and update state
      console.error(error);
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
    try {
      setLoading(true);
      setError(null);

      await authApi.login({ email, password });
      await refreshUser();
    } catch (err) {
      setUser(null);
      setError("Login failed");
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
