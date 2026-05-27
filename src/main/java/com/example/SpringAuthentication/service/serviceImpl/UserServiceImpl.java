package com.example.SpringAuthentication.service.serviceImpl;

import com.example.SpringAuthentication.dto.*;
import com.example.SpringAuthentication.entity.ERole;
import com.example.SpringAuthentication.entity.User;
import com.example.SpringAuthentication.repository.UserRepository;
import com.example.SpringAuthentication.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {



    private final UserRepository userRepository;

    @Override
    public UserResponse updateProfile(UserRequest request) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userRepository.findByEmails(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Only update if request has non-null values
        if (request.getFullName() != null) {
            user.setFullName(request.getFullName());
        }
        if (request.getPhone() != null) {
            user.setPhone(request.getPhone());
        }
        if (request.getLocation() != null) {
            user.setLocation(request.getLocation());
        }
        if (request.getBio() != null) {
            user.setBio(request.getBio());
        }

        User updatedUser = userRepository.save(user);

        return new UserResponse(
                updatedUser.getFullName() != null ? updatedUser.getFullName() : "",
                updatedUser.getEmail() != null ? updatedUser.getEmail() : "",
                updatedUser.getPhone() != null ? updatedUser.getPhone() : "",
                updatedUser.getLocation() != null ? updatedUser.getLocation() : "",
                updatedUser.getDesignation() != null ? updatedUser.getDesignation() : "",
                updatedUser.getCreatedAt(),
                updatedUser.getBio() != null ? updatedUser.getBio() : ""
        );
    }

//    @Override
//    public UserResponse updateProfile(UserRequest request) {
//        Authentication authentication =
//                SecurityContextHolder.getContext().getAuthentication();
//        String email = authentication.getName();
//        User user = userRepository.findByEmails(email)
//                .orElseThrow(() -> new RuntimeException("User not found"));
//
//        user.setFullName(request.getFullName());
//        user.setPhone(request.getPhone());
//        user.setLocation(request.getLocation());
//        user.setBio(request.getBio());
//        User updatedUser = userRepository.save(user);
//
//        return new UserResponse(
//                updatedUser.getFullName(),
//                updatedUser.getEmail(),
//                updatedUser.getPhone(),
//                updatedUser.getLocation(),
//                updatedUser.getBio(),
//                updatedUser.getCreatedAt(),
//                updatedUser.getDesignation()
//        );
//    }


//    @Override
//    public UserResponse getProfile() {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        String email = authentication.getName();
//        User user = userRepository.findByEmails(email)
//                .orElseThrow(() -> new RuntimeException("User not found"));
//        return new UserResponse (
//                user.getFullName(),
//                user.getEmail(),
//                user.getPhone(),
//                user.getLocation(),
//                user.getDesignation(),
//                user.getCreatedAt(),
//                user.getBio()
//        );
//    }
        @Override
        public UserResponse getProfile() {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String email = authentication.getName();
            User user = userRepository.findByEmails(email)
                    .orElseThrow(() -> new RuntimeException("User not found"));

            // Debug: print the user object
            System.out.println("User: " + user);

            return new UserResponse(
                    user.getFullName() != null ? user.getFullName() : "",
                    user.getEmail() != null ? user.getEmail() : "",
                    user.getPhone() != null ? user.getPhone() : "",
                    user.getLocation() != null ? user.getLocation() : "",
                    user.getDesignation() != null ? user.getDesignation() : "",
                    user.getCreatedAt(),
                    user.getBio() != null ? user.getBio() : ""
            );
        }


}
