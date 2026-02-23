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
import AddMembership from "../pages/admin/memberships/AddMembership";
import { MembershipList } from "../pages/admin/memberships/MembershipList";

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
        <Route
          path="/admin/membership"
          element={
            <PrivateRoute>
              <RoleRoute role="admin">
                <MembershipList />
              </RoleRoute>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/membership/add"
          element={
            <PrivateRoute>
              <RoleRoute role="admin">
                <AddMembership />
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
