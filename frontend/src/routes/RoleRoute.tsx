import { Navigate } from "react-router-dom";

export function RoleRoute({ children, role }: { children: any; role: string }) {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (user.role !== role) {
    return <Navigate to="/login" />;
  }
  return children;
}
