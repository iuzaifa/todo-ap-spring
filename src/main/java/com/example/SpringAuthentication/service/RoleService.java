package com.example.SpringAuthentication.service;


import com.example.SpringAuthentication.dto.RoleRequest;
import com.example.SpringAuthentication.entity.ERole;
import com.example.SpringAuthentication.entity.Role;

import java.util.List;

public interface RoleService {

    Role addNewRole(RoleRequest request);
    void deleteRole(Long roleId);
    List<Role> getAllRoles();
}
