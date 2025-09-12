package org.lessons.spring.backend_java.backend_java.service;

import java.util.List;
import java.util.Optional;

import org.lessons.spring.backend_java.backend_java.model.Corso;
import org.lessons.spring.backend_java.backend_java.repository.CorsoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CorsoService {

    @Autowired
    private CorsoRepository corsoRepository;

    public List<Corso> findAll() {
        return corsoRepository.findAll();
    }

    public List<Corso> findByName(String name) {
        return corsoRepository.findByNameContainingIgnoreCase(name);
    }

    public Corso getById(Integer id) {
        return corsoRepository.findById(id).get();
    }

    public Optional<Corso> findById(Integer id) {
        return corsoRepository.findById(id);
    }

    public Corso create(Corso corso) {
        return corsoRepository.save(corso);
    }

    public Corso update(Corso corso) {
        return corsoRepository.save(corso);
    }

    public void delete(Corso corso) {
        corsoRepository.delete(corso);
    }

    public void deleteById(Integer id) {
        corsoRepository.deleteById(id);
    }

    public boolean existById(Integer id) {
        return corsoRepository.existsById(id);
    }
}
