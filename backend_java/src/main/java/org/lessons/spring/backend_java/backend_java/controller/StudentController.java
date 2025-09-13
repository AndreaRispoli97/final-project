package org.lessons.spring.backend_java.backend_java.controller;

import java.util.List;

import org.lessons.spring.backend_java.backend_java.model.Student;
import org.lessons.spring.backend_java.backend_java.service.CorsoService;
import org.lessons.spring.backend_java.backend_java.service.StudentService;
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
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private CorsoService corsoService;

    @GetMapping
    public String index(
            @RequestParam(name = "name", required = false) String name,
            @RequestParam(name = "surname", required = false) String surname,
            Model model) {
        List<Student> students;
        if (name != null && !name.isEmpty() && surname != null && !surname.isEmpty()) {
            students = studentService.findByNameAndSurname(name, surname);
        } else if (name != null && !name.isEmpty()) {
            students = studentService.findByName(name);
        } else if (surname != null && !surname.isEmpty()) {
            students = studentService.findBySurName(surname);
        } else {
            students = studentService.findAll();
        }
        model.addAttribute("students", students);
        return "students/index";
    }

    @GetMapping("/{id}")
    public String show(@PathVariable Integer id, Model model) {
        model.addAttribute("student", studentService.getById(id));

        return "students/show";
    }

    @GetMapping("/create")
    public String create(Model model) {
        model.addAttribute("student", new Student());
        model.addAttribute("corsi", corsoService.findAll());
        return "students/create-or-edit";
    }

    @PostMapping("/create")
    public String store(@Valid @ModelAttribute("student") Student student, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return "students/create-or-edit";
        }
        studentService.create(student);
        return "redirect:/students";
    }

    @GetMapping("/edit/{id}")
    public String edit(@PathVariable Integer id, Model model) {
        model.addAttribute("student", studentService.getById(id));
        model.addAttribute("edit", true);
        model.addAttribute("corsi", corsoService.findAll());
        return "students/create-or-edit";
    }

    @PostMapping("/edit/{id}")
    public String update(@Valid @ModelAttribute("student") Student student, BindingResult bindingResult,
            Model model) {
        if (bindingResult.hasErrors()) {
            model.addAttribute("edit", true);
            return "students/create-or-edit";
        }
        studentService.update(student);

        return "redirect:/students";
    }

    @PostMapping("/delete/{id}")
    public String delete(@PathVariable Integer id) {
        // Student studentToRemove = studentService.getById(id);
        // for (Corso students : studentToRemove.getCorsi()) {
        // students.getStudents().remove(studentToRemove);
        // }
        // studentService.delete(studentToRemove);
        studentService.deleteById(id);
        return "redirect:/students";
    }

}
