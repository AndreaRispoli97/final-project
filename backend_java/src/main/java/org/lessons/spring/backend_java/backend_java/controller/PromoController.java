package org.lessons.spring.backend_java.backend_java.controller;

import org.lessons.spring.backend_java.backend_java.model.Promo;
import org.lessons.spring.backend_java.backend_java.service.PromoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequestMapping("/promos")
public class PromoController {

    @Autowired
    private PromoService promoService;

    @PostMapping("/create")
    public String create(@Valid @ModelAttribute("promo") Promo formPromo, BindingResult bindingResult, Model model) {

        if (bindingResult.hasErrors()) {
            return "/promos/create";
        }

        promoService.create(formPromo);
        return "redirect:/corsi/" + formPromo.getCorso().getId();
    }

    @GetMapping("/edit/{id}")
    public String edit(@PathVariable Integer id, Model model) {

        model.addAttribute("promo", promoService.getById(id));
        model.addAttribute("edit", true);
        return "promos/edit";
    }

    @PostMapping("/edit/{id}")
    public String update(@Valid @ModelAttribute("promo") Promo formPromo, BindingResult bindingResult, Model model) {

        if (bindingResult.hasErrors()) {
            return "/promos/edit";
        }

        promoService.create(formPromo);
        return "redirect:/corsi/" + formPromo.getCorso().getId();
    }

    @PostMapping("/delete")
    public String delete(@RequestParam Integer id) {
        Promo promoToDelete = promoService.getById(id);
        Integer corsoId = promoToDelete.getCorso().getId();
        promoService.deleteById(id);
        return "redirect:/corsi/" + corsoId;
    }

}
