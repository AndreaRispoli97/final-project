package org.lessons.spring.backend_java.backend_java.repository;

import java.util.List;

import org.lessons.spring.backend_java.backend_java.model.Corso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CorsoRepository extends JpaRepository<Corso, Integer> {

    public List<Corso> findByNameContainingIgnoreCase(String name);
}
