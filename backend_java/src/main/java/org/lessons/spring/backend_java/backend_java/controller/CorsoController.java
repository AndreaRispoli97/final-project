package org.lessons.spring.backend_java.backend_java.controller;

import java.util.List;

import org.lessons.spring.backend_java.backend_java.model.Corso;
import org.lessons.spring.backend_java.backend_java.service.CorsoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/corsi")
public class CorsoController {

    @Autowired
    private CorsoService corsoService;

    @GetMapping
    public String index(@RequestParam(name = "name", required = false) String name, Model model) {

        List<Corso> corsi;
        if (name != null && !name.isEmpty()) {
            corsi = corsoService.findByName(name);
        } else {
            corsi = corsoService.findAll();
        }

        model.addAttribute("corsi", corsi);

        return "corsi/index";
    }

    @GetMapping("/{id}")
    public String show(@PathVariable("id") Integer id, Model model) {

        Corso corso = corsoService.getById(id);
        model.addAttribute("corso", corso);
        return "corsi/show";
    }

    @GetMapping("/create")
    public String create(Model model) {
        model.addAttribute("corso", new Corso());
        return "/corsi/create-or-edit";
    }

    @PostMapping("/create")
    public String store(@Valid @ModelAttribute("corso") Corso formCorso, BindingResult bindingResult, Model model) {
        if (bindingResult.hasErrors()) {
            return "corsi/create";
        }
        corsoService.create(formCorso);

        return "redirect:/corsi";
    }

    @GetMapping("/edit/{id}")
    public String edit(@PathVariable Integer id, Model model) {
        model.addAttribute("corso", corsoService.getById(id));
        model.addAttribute("edit", true);
        return "corsi/create-or-edit";
    }

    @PostMapping("/edit/{id}")
    public String update(@Valid @ModelAttribute("corsi") Corso formCorso, BindingResult bindingResult, Model model) {
        if (bindingResult.hasErrors()) {
            return "corsi/edit";
        }
        corsoService.update(formCorso);

        return "redirect:/corsi";
    }

    @PostMapping("/delete/{id}")
    public String delete(@PathVariable Integer id) {
        corsoService.deleteById(id);
        return "redirect:/corsi";
    }
}
