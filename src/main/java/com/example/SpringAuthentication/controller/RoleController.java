package com.example.SpringAuthentication.controller;

import com.example.SpringAuthentication.dto.RoleRequest;
import com.example.SpringAuthentication.entity.ERole;
import com.example.SpringAuthentication.entity.Role;
import com.example.SpringAuthentication.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class RoleController {

    @Autowired
    private RoleService roleService;


    @PostMapping("/add/newrole")
    public ResponseEntity<Role> addRole(@RequestBody RoleRequest request){
        return ResponseEntity.status(HttpStatus.CREATED).body(roleService.addNewRole(request));
    }

    @GetMapping("/roles/get-all")
    public ResponseEntity<List<Role>> getAllRoles(){
        return ResponseEntity.status(HttpStatus.OK).body(roleService.getAllRoles());
    }

    @DeleteMapping("/role/delete/{roleId}")
    public ResponseEntity<String> deleteRole(@PathVariable Long roleId){
        roleService.deleteRole(roleId);
        return ResponseEntity.status(HttpStatus.OK).body("Role Deleted Successfully!");
    }


}
