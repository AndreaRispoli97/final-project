package org.lessons.spring.backend_java.backend_java.model;

import java.math.BigDecimal;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "corsi")
public class Corso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank(message = "The name must not be null or empty or blank")
    @Size(min = 3, max = 30)
    private String name;

    private String image;

    @Lob
    private String description;

    @NotNull(message = "The price must not be null")
    @Min(value = 0)
    private BigDecimal price;

    // relazioni

    @JsonIgnore
    @OneToMany(mappedBy = "corso")
    private List<Promo> promos;

    public List<Promo> getPromos() {
        return this.promos;
    }

    public void setPromos(List<Promo> promos) {
        this.promos = promos;
    }

    @ManyToMany
    @JsonIgnore
    @JoinTable(name = "corso_student", joinColumns = @JoinColumn(name = "corso_id"), inverseJoinColumns = @JoinColumn(name = "student_id"))
    private List<Student> students;

    public List<Student> getStudents() {
        return this.students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    // Getter e Setter

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

    public String getImage() {
        return this.image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return this.price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

}
