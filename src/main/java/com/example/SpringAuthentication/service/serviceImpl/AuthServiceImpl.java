package com.example.SpringAuthentication.service.serviceImpl;

import com.example.SpringAuthentication.dto.LoginRequest;
import com.example.SpringAuthentication.dto.LoginResponse;
import com.example.SpringAuthentication.dto.RegisterRequest;
import com.example.SpringAuthentication.dto.RegisterResponse;
import com.example.SpringAuthentication.entity.ERole;
import com.example.SpringAuthentication.entity.Role;
import com.example.SpringAuthentication.entity.User;
import com.example.SpringAuthentication.repository.RoleRepository;
import com.example.SpringAuthentication.repository.UserRepository;
import com.example.SpringAuthentication.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {



    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    AuthenticationManager authManager;

    @Autowired
    private PasswordEncoder encoder;


    @Override
    public RegisterResponse register(RegisterRequest request) {
        Role defaultRole = roleRepository
                .findByName(ERole.ROLE_USER)
                .orElseThrow(() ->
                        new RuntimeException("Default role not found"));
        User u = new User();
        u.setUsername(request.getUsername());
        u.setPassword(encoder.encode(request.getPassword()));
        u.getRoles().add(defaultRole);
        userRepository.save(u);

        RegisterResponse response = new RegisterResponse();
        response.setUsername(u.getUsername());
        return response;
    }



    @Override
    public LoginResponse verify(LoginRequest request) {
        Authentication authentication = authManager.authenticate
                (new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        if (authentication.isAuthenticated()) {
//            return jwtService.generateToken(user.getUsername());
            return new LoginResponse(
                    request.getUsername(),
                    "Login Successful"
            );
        } else {
            throw new RuntimeException("Invalid Email or Password");
        }
    }

}
