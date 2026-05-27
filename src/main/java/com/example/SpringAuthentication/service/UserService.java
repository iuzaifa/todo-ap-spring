package com.example.SpringAuthentication.service;


import com.example.SpringAuthentication.dto.UserRequest;
import com.example.SpringAuthentication.dto.UserResponse;
import com.example.SpringAuthentication.repository.UserRepository;

public interface UserService {



    UserResponse updateProfile(UserRequest request);
    UserResponse getProfile ();




}
