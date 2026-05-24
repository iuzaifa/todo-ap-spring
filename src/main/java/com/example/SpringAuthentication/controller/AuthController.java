package com.example.SpringAuthentication.controller;

import com.example.SpringAuthentication.dto.LoginRequest;
import com.example.SpringAuthentication.dto.LoginResponse;
import com.example.SpringAuthentication.dto.RegisterRequest;
import com.example.SpringAuthentication.dto.RegisterResponse;
import com.example.SpringAuthentication.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private AuthService authService;


    @PostMapping("/register")
    public RegisterResponse register(@RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return authService.verify(request);
    }

}
