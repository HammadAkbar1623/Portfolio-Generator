import { useAuth } from "./AuthContext";
import { Navigate, useRouter } from "@tanstack/react-router";
import { ReactNode } from "react";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
};
