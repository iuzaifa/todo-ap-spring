package com.example.SpringAuthentication.repository;

import com.example.SpringAuthentication.entity.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface TaskRepository extends JpaRepository<Tasks, Long> {


    List<Tasks> findByUserId(Long userId);
}
