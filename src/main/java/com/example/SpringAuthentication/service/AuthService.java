package com.example.SpringAuthentication.service;

import com.example.SpringAuthentication.dto.LoginRequest;
import com.example.SpringAuthentication.dto.LoginResponse;
import com.example.SpringAuthentication.dto.RegisterRequest;
import com.example.SpringAuthentication.dto.RegisterResponse;

public interface AuthService {


    RegisterResponse register(RegisterRequest request);

    LoginResponse verify(LoginRequest request);

}
