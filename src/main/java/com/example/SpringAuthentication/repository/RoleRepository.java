package com.example.SpringAuthentication.repository;

import com.example.SpringAuthentication.entity.ERole;
import com.example.SpringAuthentication.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole roleName);
}
