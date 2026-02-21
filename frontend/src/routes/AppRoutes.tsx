import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/public/Landing";
import Login from "../pages/auth/Login";
import PrivateRoute from "./PrivateRoute";
import { RoleRoute } from "./RoleRoute";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UserDashboard from "../pages/user/UserDashboard";
import Register from "../pages/auth/Register";
import MemberList from "../pages/admin/members/MemberList";
import { AddMember } from "../pages/admin/members/AddMember";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public */}

        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Admin */}

        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <RoleRoute role="admin">
                <AdminDashboard />
              </RoleRoute>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/members"
          element={
            <PrivateRoute>
              <RoleRoute role="admin">
                <MemberList />
              </RoleRoute>
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/members/add"
          element={
            <PrivateRoute>
              <RoleRoute role="admin">
                <AddMember />
              </RoleRoute>
            </PrivateRoute>
          }
        />

        {/* User */}
        <Route
          path="/user/dashboard"
          element={
            <PrivateRoute>
              <RoleRoute role="user">
                <UserDashboard />
              </RoleRoute>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
