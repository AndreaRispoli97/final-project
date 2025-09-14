package org.lessons.spring.backend_java.backend_java.controller.api;

import java.util.List;
import java.util.Optional;

import org.lessons.spring.backend_java.backend_java.model.Corso;
import org.lessons.spring.backend_java.backend_java.service.CorsoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/corsi")
public class CorsoRestController {

    @Autowired
    private CorsoService corsoService;

    @GetMapping
    public List<Corso> index() {
        List<Corso> corsi = corsoService.findAll();
        return corsi;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Corso> show(@PathVariable Integer id) {
        Optional<Corso> corsoAttempt = corsoService.findById(id);

        if (corsoAttempt.isEmpty()) {
            return new ResponseEntity<Corso>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Corso>(corsoAttempt.get(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Corso> store(@RequestBody Corso corso) {
        return new ResponseEntity<Corso>(corsoService.create(corso), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Corso> update(@RequestBody Corso corso, @PathVariable Integer id) {

        if (corsoService.findById(id).isEmpty()) {
            return new ResponseEntity<Corso>(HttpStatus.NOT_FOUND);
        }

        corso.setId(id);
        return new ResponseEntity<Corso>(corsoService.update(corso), HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Corso> delete(@PathVariable Integer id) {

        if (corsoService.findById(id).isEmpty()) {
            return new ResponseEntity<Corso>(HttpStatus.NOT_FOUND);
        }

        corsoService.deleteById(id);
        return new ResponseEntity<Corso>(HttpStatus.OK);

    }
}
