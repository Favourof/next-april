import { AuthContextValue } from "@/type/auth";
import { createContext } from "react";

export const AuthContext = createContext<AuthContextValue | null>(null);
