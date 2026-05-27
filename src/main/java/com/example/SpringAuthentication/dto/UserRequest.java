package com.example.SpringAuthentication.dto;

import com.example.SpringAuthentication.entity.ERole;
import lombok.Data;

@Data
public class UserRequest {

    private String fullName;
    private String phone;
    private String location;
    private String bio;

}
