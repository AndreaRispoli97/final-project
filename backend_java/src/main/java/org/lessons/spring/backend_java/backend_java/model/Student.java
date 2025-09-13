package org.lessons.spring.backend_java.backend_java.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank(message = "The name must not be null or empty or blank")
    private String name;

    @NotBlank(message = "The surname must not be null or empty or blank")
    private String surname;

    @ManyToMany(mappedBy = "students")
    @JsonManagedReference
    private List<Corso> corsi;

    public List<Corso> getCorsi() {
        return this.corsi;
    }

    public void setCorsi(List<Corso> corsi) {
        this.corsi = corsi;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return this.surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

}
