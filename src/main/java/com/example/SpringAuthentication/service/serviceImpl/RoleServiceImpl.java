package com.example.SpringAuthentication.service.serviceImpl;

import com.example.SpringAuthentication.dto.RoleRequest;
import com.example.SpringAuthentication.entity.ERole;
import com.example.SpringAuthentication.entity.Role;
import com.example.SpringAuthentication.repository.RoleRepository;
import com.example.SpringAuthentication.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public Role addNewRole(RoleRequest request) {

        if (roleRepository.findByName(request.getRole()).isPresent()) {
            throw new RuntimeException("Role already exists");
        }

        Role role = new Role();
        role.setName(request.getRole());
        return roleRepository.save(role);
    }

    @Override
    public void deleteRole(Long roleId) {
        if (roleRepository.existsById(roleId)) {
            roleRepository.deleteById(roleId);
        } else {
            throw new RuntimeException("Role not found with id : " + roleId);
        }
    }

    @Override
    public List<Role> getAllRoles() {
        List<Role> roles = roleRepository.findAll();

        if (roles.isEmpty()) {
            throw new RuntimeException("No roles found");
        }
        return roles;
    }
}
