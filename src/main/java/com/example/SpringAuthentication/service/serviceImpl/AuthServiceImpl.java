package com.example.SpringAuthentication.service.serviceImpl;

import com.example.SpringAuthentication.dto.*;
import com.example.SpringAuthentication.entity.ERole;
import com.example.SpringAuthentication.entity.Role;
import com.example.SpringAuthentication.entity.User;
import com.example.SpringAuthentication.repository.RoleRepository;
import com.example.SpringAuthentication.repository.UserRepository;
import com.example.SpringAuthentication.security.JwtService;
import com.example.SpringAuthentication.service.AuthService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {



    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private  AuthenticationManager authManager;
    @Autowired
    private PasswordEncoder encoder;

//    @Autowired
//    private TokenBlacklistService tokenBlacklistService;



    @Override
    public RegisterResponse register(RegisterRequest request) {
        // check email already exists
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }
        Role defaultRole = roleRepository
                .findByName(ERole.ROLE_USER)
                .orElseThrow(() ->
                        new RuntimeException("Default role not found"));

        User u = new User();
        u.setFullName(request.getFullName());
        u.setEmail(request.getEmail());
        u.setPassword(encoder.encode(request.getPassword()));
        u.getRoles().add(defaultRole);
        userRepository.save(u);
        RegisterResponse response = new RegisterResponse();
        response.setEmail(u.getEmail());
        response.setFullName(u.getFullName());
        return response;
    }

    @Override
    public AuthResponse login(LoginRequest request) {
        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        UserDetails user = (UserDetails) auth.getPrincipal();
        String accessToken = jwtService.generateAccessToken(user.getUsername());
        String refreshToken = jwtService.generateRefreshToken(user.getUsername());
        return new AuthResponse(accessToken, request.getEmail());
    }

    @Override
    public AuthResponse refreshToken(String refreshToken) {
        String username = jwtService.extractEmail(refreshToken);
        UserDetails user = userDetailsService.loadUserByUsername(username);
        if (!jwtService.isValid(refreshToken, user)) {
            throw new RuntimeException("Invalid refresh token");
        }
        String newAccessToken = jwtService.generateAccessToken(username);
        return new AuthResponse(newAccessToken , "");
    }

    @Override
    public void logout(HttpServletResponse response) {
        ResponseCookie cookie = ResponseCookie.from("refreshToken", "")
                .httpOnly(true)
                .secure(false)
                .path("/auth/refresh")
                .maxAge(0)
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
    }
//        @Override
//        public void logout(HttpServletRequest request, HttpServletResponse response) {
//            String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
//            if (authHeader != null && authHeader.startsWith("Bearer ")) {
//                String token = authHeader.substring(7);
//                tokenBlacklistService.invalidate(token); // optional blacklist
//            }
//
//            ResponseCookie cookie = ResponseCookie.from("refreshToken", "")
//                    .httpOnly(true)
//                    .path("/")
//                    .maxAge(0)
//                    .build();
//            response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
//        }


//    @Override
//    public LoginResponse verify(LoginRequest request) {
//        Authentication authentication = authManager.authenticate
//                (new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
//        if (authentication.isAuthenticated()) {
//             String jwtToken =  jwtService.generateAccessToken(request.getUsername());
//            return new LoginResponse(
//                    request.getUsername(),
//                    jwtToken
//            );
//        } else {
//            throw new RuntimeException("Invalid Email or Password");
//        }
//    }

}
