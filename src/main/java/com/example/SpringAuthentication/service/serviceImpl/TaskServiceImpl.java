package com.example.SpringAuthentication.service.serviceImpl;

import com.example.SpringAuthentication.dto.TaskRequest;
import com.example.SpringAuthentication.dto.TaskResponse;
import com.example.SpringAuthentication.entity.Tasks;
import com.example.SpringAuthentication.entity.User;
import com.example.SpringAuthentication.repository.TaskRepository;
import com.example.SpringAuthentication.repository.UserRepository;
import com.example.SpringAuthentication.service.TaskService;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    public TaskServiceImpl(TaskRepository taskRepository, UserRepository userRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;


    @Override
    public TaskResponse createTask(TaskRequest request) {
        Tasks task = new Tasks();
        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        task.setPriority(request.getPriority());
        task.setStatus(request.getStatus());
        task.setStartDate(request.getStartDate());
        task.setEndDate(request.getEndDate());
        task.setActive(request.isActive());

        Tasks saved = taskRepository.save(task);
        return toResponse(saved);
    }

    @Override
    public TaskResponse updateTask(Long id, TaskRequest request) {
        Tasks task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        task.setPriority(request.getPriority());
        task.setStatus(request.getStatus());
        task.setStartDate(request.getStartDate());
        task.setEndDate(request.getEndDate());
        task.setActive(request.isActive());
        task.setUpdatedAt(request.getUpdatedAt());

        Tasks updated = taskRepository.save(task);
        return toResponse(updated);
    }

    @Override
    public void deleteTask(Long id) {
        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();
        taskRepository.deleteById(id);
    }

    @Override
    public TaskResponse getTaskById(Long id) {
        Tasks task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));
        return toResponse(task);
    }

    @Override
    public List<TaskResponse> getAllTasks() {
        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        User user = userRepository.findByEmails(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return taskRepository.findByUserId(user.getId())
                .stream()
                .map(this::toResponse)
                .toList();
    }

        @Override
        public TaskResponse addNewByUser(TaskRequest request) {
            Authentication authentication =
                    SecurityContextHolder.getContext().getAuthentication();
            String email = authentication.getName();
            User user = userRepository.findByEmails(email)
                    .orElseThrow(()-> new RuntimeException("User not found"));
            Tasks task = new Tasks();
            task.setTitle(request.getTitle());
            task.setDescription(request.getDescription());
            task.setPriority(request.getPriority());
            task.setStatus(request.getStatus());
            task.setStartDate(request.getStartDate());
            task.setEndDate(request.getEndDate());
            task.setActive(request.isActive());
            task.setUser(user);
            Tasks saved = taskRepository.save(task);
            return toResponse(saved);
        }




    // Manual conversion helper
    private TaskResponse toResponse(Tasks task) {
        TaskResponse response = new TaskResponse();
        response.setId(task.getId());
        response.setTitle(task.getTitle());
        response.setDescription(task.getDescription());
        response.setPriority(task.getPriority());
        response.setStatus(task.getStatus());
        response.setStartDate(task.getStartDate());
        response.setEndDate(task.getEndDate());
        response.setActive(task.isActive());
        response.setUpdatedAt(task.getUpdatedAt());
        return response;
    }



}
