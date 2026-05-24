package com.example.SpringAuthentication.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingsController {


    @GetMapping("/hello")
    public  String hello(){
        return  "Hello";
    }


    @GetMapping("/user")
    @PreAuthorize("hasRole('USER')")
    public String user() {
        return "User Access";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String admin() {
        return "Admin Access";
    }

    @GetMapping("/manager")
    @PreAuthorize("hasRole('MANAGER')")
    public String manager() {
        return "Manager Access";
    }

}
