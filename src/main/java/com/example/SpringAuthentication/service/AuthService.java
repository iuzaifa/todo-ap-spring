package com.example.SpringAuthentication.service;

import com.example.SpringAuthentication.dto.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthService {


    RegisterResponse register(RegisterRequest request);


    AuthResponse login(LoginRequest request);

    AuthResponse refreshToken(String refreshToken);

    void logout(HttpServletResponse response);

//    void logout(HttpServletRequest request, HttpServletResponse response);

}
