import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function RoleRoute({ children, role }: { children: any; role: string }) {
  const { user } = useAuth();
  if (user?.role !== role) {
    return <Navigate to="/login" />;
  }
  return children;
}
