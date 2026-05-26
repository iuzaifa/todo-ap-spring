
//src/utils/utils.ts
import api from "../api/api";

interface RegisterPayload {
  fullName: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  email: string;        
  accessToken: string; 
}


export const isLoggedIn = (): boolean => {
  const token = localStorage.getItem("token");
  return !!token; // true if token exists
};

export const registerUser = async (payload: RegisterPayload) => {
  const response = await api.post("/register", payload);
  return response.data;
};


export const loginUser = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/login", payload);
  return response.data;
};



export const logout = async (): Promise<void> => {
  const token = localStorage.getItem("token");

  await api.post<void>("/logout",
    {}, // empty body
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // clear client-side tokens
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
};




