package com.example.SpringAuthentication.dto;

import com.example.SpringAuthentication.entity.Priority;
import com.example.SpringAuthentication.entity.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class TaskRequest {
    private String title;
    private String description;
    private Priority priority;
    private Status status;
    private LocalDate startDate;
    private LocalDate endDate;
    private boolean active;
}
