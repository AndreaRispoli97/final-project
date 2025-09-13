package org.lessons.spring.backend_java.backend_java.repository;

import java.util.List;

import org.lessons.spring.backend_java.backend_java.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Integer> {

    public List<Student> findByNameContainingIgnoreCase(String name);

    public List<Student> findBySurnameContainingIgnoreCase(String surname);

    public List<Student> findByNameAndSurnameContainingIgnoreCase(String name, String surname);
}
