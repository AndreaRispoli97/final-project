package org.lessons.spring.backend_java.backend_java.repository;

import java.util.Optional;

import org.lessons.spring.backend_java.backend_java.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);
}
