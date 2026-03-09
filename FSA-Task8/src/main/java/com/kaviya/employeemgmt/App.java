package com.kaviya.employeemgmt;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.kaviya.employeemgmt.config.AppConfig;
import com.kaviya.employeemgmt.service.EmployeeService;

/**
 * Hello world!
 */
public class App {
	public static void main(String[] args) {

        BeanFactory factory =
                new AnnotationConfigApplicationContext(AppConfig.class);

        EmployeeService service = factory.getBean(EmployeeService.class);

        service.createEmployee(101, "Raja", "CSE");
        service.createEmployee(102, "Rani", "IT");
        service.createEmployee(103, "Anu", "ECE");

        service.fetchAllEmployees().forEach(System.out::println);
    }
}