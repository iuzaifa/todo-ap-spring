package com.example.SpringAuthentication.service;

import com.example.SpringAuthentication.dto.TaskRequest;
import com.example.SpringAuthentication.dto.TaskResponse;

import java.util.List;

public interface TaskService {
    TaskResponse createTask(TaskRequest request);
    TaskResponse updateTask(Long id, TaskRequest request);
    void deleteTask(Long id);
    TaskResponse getTaskById(Long id);
    List<TaskResponse> getAllTasks();

    TaskResponse addNewByUser (TaskRequest request);
}
