import { Routes, Route } from "react-router";

import PublicLayout from "../layouts/PublicLayout";
import ProtectedRoute from "./ProtectedRoute";

import Home from "../pages/public/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import StudentDashboard from "../pages/student/StudentDashboard";
import EmployerDashboard from "../pages/employer/EmployerDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";

function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Authentication */}
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* Protected */}
      <Route element={<ProtectedRoute />}>
        <Route path="/student/dashboard" element={<StudentDashboard />} />

        <Route path="/employer/dashboard" element={<EmployerDashboard />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
