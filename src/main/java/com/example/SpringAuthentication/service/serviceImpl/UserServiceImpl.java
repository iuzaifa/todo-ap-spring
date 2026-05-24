package com.example.SpringAuthentication.service.serviceImpl;

import com.example.SpringAuthentication.dto.*;
import com.example.SpringAuthentication.entity.User;
import com.example.SpringAuthentication.repository.UserRepository;
import com.example.SpringAuthentication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {



}
