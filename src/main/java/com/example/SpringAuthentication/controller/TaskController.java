package com.example.SpringAuthentication.controller;

import com.example.SpringAuthentication.dto.TaskRequest;
import com.example.SpringAuthentication.dto.TaskResponse;
import com.example.SpringAuthentication.service.TaskService;
import com.example.SpringAuthentication.service.serviceImpl.AnalyticsServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173") // allow your frontend
@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;
    private final AnalyticsServiceImpl analyticsService;

    public TaskController(TaskService taskService, AnalyticsServiceImpl analyticsService) {
        this.taskService = taskService;
        this.analyticsService = analyticsService;
    }

    // /tasks/add
    @PostMapping("/add")
    public TaskResponse create(@RequestBody TaskRequest request) {
        return taskService.createTask(request);
    }

    @PutMapping("/update/{id}")
    public TaskResponse update(@PathVariable Long id, @RequestBody TaskRequest request) {
        return taskService.updateTask(id, request);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        taskService.deleteTask(id);
    }

    @GetMapping("/{id}")
    public TaskResponse getById(@PathVariable Long id) {
        return taskService.getTaskById(id);
    }

    @GetMapping("/get-all-tasks")
    public List<TaskResponse> getAll() {
        return taskService.getAllTasks();
    }

    @PostMapping("/create")
    public ResponseEntity<TaskResponse> createTask(@RequestBody TaskRequest request) {
        TaskResponse response = taskService.addNewByUser(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/analytics")
    public ResponseEntity<Map<String, Object>> getAnalytics() {
        return ResponseEntity.ok(analyticsService.getAnalytics());
    }



}
