// src/utils/taskApi.ts
import api from "../api/api"; // your Axios instance


export interface TaskResponse {
  id: number;
  title: string;
  description: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  status:  "PENDING"| "ACTIVE" | "COMPLETED" |  "NOT_INITIATED" | "READY_INITIATED" | "REJECTED";
  startDate: string; 
  endDate: string;
  active: boolean;
}

export interface CreateTask {
  title: string;
  description: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  status:  "PENDING"| "ACTIVE" | "COMPLETED" |  "NOT_INITIATED" | "READY_INITIATED" | "REJECTED";
  startDate: string; 
  endDate: string;
  active: boolean;
}



export const getAllTasks = async (): Promise<TaskResponse[]> => {
  const token = localStorage.getItem("token");
  const response = await api.get<TaskResponse[]>("/tasks/get-all-tasks", {
    headers: {
      Authorization: `Bearer ${token}`, // Clean, manual fallback context wrapper
    },
  });
  return response.data;
};


export const createTaskApi = async ( taskData: CreateTask): Promise<CreateTask> => {
  const token = localStorage.getItem("token");
  const response = await api.post<CreateTask>("/tasks/create",taskData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
