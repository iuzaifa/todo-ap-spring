// src/utils/auth.ts
import {jwtDecode} from "jwt-decode";

interface JwtPayload {
  sub: string;
  iat: number;
  exp: number;
}

export const isLoggedIn = (): boolean => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded.exp * 1000 > Date.now();
  } catch {
    return false;
  }
};
