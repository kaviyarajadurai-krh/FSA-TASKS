package com.kaviya.employeemgmt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.kaviya.employeemgmt.model.Employee;
import com.kaviya.employeemgmt.repository.EmployeeRepository;
@Component
public class EmployeeService {
	@Autowired
	private EmployeeRepository employeeRepository;

    public void createEmployee(int id, String name, String dept) {
        Employee emp = new Employee(id, name, dept);
        employeeRepository.addEmployee(emp);
    }

    public List<Employee> fetchAllEmployees() {
        return employeeRepository.getAllEmployees();
    }

}
