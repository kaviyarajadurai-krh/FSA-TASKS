package com.kaviya.springmvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.kaviya.springmvc.model.Employee;

@Controller
public class EmployeeController {
	@RequestMapping("/showEmployee")
	public String getEmployee(Model model) {
        Employee emp = new Employee(101, "AAA", "Development");
        
        model.addAttribute("employee", emp);
        return "display"; 
    }

}
