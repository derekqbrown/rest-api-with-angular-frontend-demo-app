package com.example.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Employee;
import com.example.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	EmployeeRepository er;
	
	public void insert(Employee employee) {
		er.save(employee);
	}
	public void delete(int id) {
		er.deleteById(id);
	}
	public Employee getEmployeeById(int id) {
		return er.findById(id).get();
	}
	
	public List<Employee> getAllEmployees() {
		return er.findAll();
	}
	public Employee getByEmail(String email) {
		Employee employee = er.findByEmail(email).get();
		return employee;
	}
	public void update(Employee employee) {
		er.update(employee.getEmployeeId(), employee.getFirstName(),employee.getLastName(),employee.getEmail(),employee.getPassword(),employee.getSalary(),employee.getDepartment());
	}
	
	

}
