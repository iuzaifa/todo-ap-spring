package com.example.SpringAuthentication.service.serviceImpl;

import com.example.SpringAuthentication.entity.Status;
import com.example.SpringAuthentication.entity.Tasks;
import com.example.SpringAuthentication.entity.User;
import com.example.SpringAuthentication.repository.TaskRepository;
import com.example.SpringAuthentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AnalyticsServiceImpl {

    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private UserRepository userRepository;

    public Map<String, Object> getAnalytics() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();

        User user = userRepository.findByEmails(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Tasks> tasks = taskRepository.findByUserId(user.getId());

        long total = tasks.size();
        long completed = tasks.stream()
                .filter(t -> t.getStatus() == Status.COMPLETED)
                .count();

        long pending = tasks.stream()
                .filter(t -> t.getStatus() == Status.PENDING)
                .count();

        double productivity = total == 0 ? 0 : (completed * 100.0 / total);

        Map<String, Object> result = new HashMap<>();
        result.put("totalTasks", total);
        result.put("completed", completed);
        result.put("pending", pending);
        result.put("productivity", productivity);


        return result;
    }
}
