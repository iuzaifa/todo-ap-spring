
import api from "../api/api"; // your Axios instance


export interface UserDetails {
    fullName : string;
    email : string;
    phone : string;
    location : string;
    createdAt : string;
    bio : string;
    designation : string;
} 




export const getUserProfile = async (): Promise<UserDetails> => {
  const token = localStorage.getItem("token");
  const response = await api.get<UserDetails>("/api/users/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// /api/users/update/profile
export interface UpdateUserD {
    fullName : string;
    phone : string;
    location : string;
    bio : string;
} 

export const updateUserProfile = async (updateData: UpdateUserD): Promise<UpdateUserD> => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No authentication token found. Please log in.");
  }
  const response = await api.put<UpdateUserD>("/api/users/update/profile", updateData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};