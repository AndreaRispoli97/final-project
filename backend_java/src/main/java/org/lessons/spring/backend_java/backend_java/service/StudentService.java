package org.lessons.spring.backend_java.backend_java.service;

import java.util.List;
import java.util.Optional;

import org.lessons.spring.backend_java.backend_java.model.Student;
import org.lessons.spring.backend_java.backend_java.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    public List<Student> findByName(String name) {
        return studentRepository.findByNameContainingIgnoreCase(name);
    }

    public List<Student> findBySurName(String surname) {
        return studentRepository.findBySurnameContainingIgnoreCase(surname);
    }

    public List<Student> findByNameAndSurname(String name, String surname) {
        return studentRepository.findByNameAndSurnameContainingIgnoreCase(name, surname);
    }

    public Student getById(Integer id) {
        return studentRepository.findById(id).get();
    }

    public Optional<Student> findById(Integer id) {
        return studentRepository.findById(id);
    }

    public Student create(Student student) {
        return studentRepository.save(student);
    }

    public Student update(Student student) {
        return studentRepository.save(student);
    }

    public void delete(Student student) {
        studentRepository.delete(student);
    }

    public void deleteById(Integer id) {
        studentRepository.deleteById(id);
    }

    public boolean existById(Integer id) {
        return studentRepository.existsById(id);
    }
}
