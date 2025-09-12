package org.lessons.spring.backend_java.backend_java.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "Promos")
public class Promo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "promo_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "corso_id", nullable = false)
    @JsonBackReference
    private Corso corso;

    @NotNull(message = "L'offerta deve pur iniziare")
    private LocalDate offerDate;

    @NotNull(message = "Dovrà pur finire quest'offerta no??")
    private LocalDate finishOfferDate;

    @Size(max = 25, message = "Un pò troppo non credi?")
    private String titleOffer;

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Corso getCorso() {
        return this.corso;
    }

    public void setCorso(Corso corso) {
        this.corso = corso;
    }

    public LocalDate getOfferDate() {
        return this.offerDate;
    }

    public void setOfferDate(LocalDate offerDate) {
        this.offerDate = offerDate;
    }

    public LocalDate getFinishOfferDate() {
        return this.finishOfferDate;
    }

    public void setFinishOfferDate(LocalDate finishOfferDate) {
        this.finishOfferDate = finishOfferDate;
    }

    public String getTitleOffer() {
        return this.titleOffer;
    }

    public void setTitleOffer(String titleOffer) {
        this.titleOffer = titleOffer;
    }
}
