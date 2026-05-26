import { Navigate } from "react-router-dom";

import { isLoggedIn } from "../utils/auth";

type ProtectedRouteProps = {
  children: React.ReactElement;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

