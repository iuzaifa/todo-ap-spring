package com.example.SpringAuthentication.controller;

import com.example.SpringAuthentication.dto.UserRequest;
import com.example.SpringAuthentication.dto.UserResponse;
import com.example.SpringAuthentication.entity.User;
import com.example.SpringAuthentication.service.serviceImpl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserServiceImpl userService;



    @GetMapping("/profile")
    public ResponseEntity<UserResponse> getProfile() {
        UserResponse user = userService.getProfile();
        return ResponseEntity.ok(user);
    }

    @PutMapping("/update/profile")
    public ResponseEntity<UserResponse> updateProfile(@RequestBody UserRequest request) {
        return ResponseEntity.ok(userService.updateProfile(request));
    }


}
