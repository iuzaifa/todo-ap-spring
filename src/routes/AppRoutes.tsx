import { Navigate, Route, Routes } from "react-router-dom";

import MyBoard from "../pages/MyBoard";
import Analytics from "../pages/Analytics";
import ProtectedRoute from "./ProtectedRoute";
import UserProfile from "../pages/UserProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { isLoggedIn } from "../utils/auth";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Protected dashboard routes */}
      <Route
        path="/board"
        element={
          <ProtectedRoute>
            <MyBoard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />
     <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Redirects */}
      <Route path="/" element={<Navigate to={isLoggedIn() ? "/board" : "/login"} replace />} />
      <Route
        path="*"
        element={<Navigate to={isLoggedIn() ? "/board" : "/login"} replace />}
      />
    </Routes>
  );
}
