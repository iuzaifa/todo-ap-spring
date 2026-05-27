package com.example.SpringAuthentication.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@NoArgsConstructor
@Data
public class UserResponse {

    private String fullName;
    private String email;
    private String phone;
    private String location;
    private LocalDateTime createdAt;
    private String bio;
    private String designation;


    public UserResponse(String fullName, String email, String phone, String location, String designation, LocalDateTime createdAt, String bio) {
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.location = location;
        this.createdAt = createdAt;
        this.bio = bio;
        this.designation = designation;
    }


}
