package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.model.Employee;
import com.example.service.EmployeeService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {
	@Autowired
	EmployeeService es;
	
	@GetMapping("/getEmployees")
	public List<Employee> getAllEmployees(){
		System.out.println("Retrieving employee list...");
		return es.getAllEmployees();
	}
	
	@GetMapping("/getEmployee/{id}")
	public Employee getEmployeeById(@PathVariable int id){
		System.out.println("Searching for employee...");
		return es.getEmployeeById(id);
	}

	@RequestMapping("/login")
	public String login(@RequestBody Employee employee) {
		System.out.println("Logging in...");
		String password = employee.getPassword();
		employee = (Employee) es.getByEmail(employee.getEmail());
		if (employee.getPassword().matches(password)) {
			System.out.println(employee.getEmployeeId());
			return Integer.toString(employee.getEmployeeId());
		}
		return "Failure";
	}
	
	@PostMapping("/register")
	public String register(@RequestBody Employee employee) {
		System.out.println("Registering...");
		es.insert(employee);
		return Integer.toString(employee.getEmployeeId());
	}
	@DeleteMapping("/delete/{id}")
	public boolean delete(@PathVariable int id) {
		System.out.println("Deleting...");
		try{
			es.delete(id);
		}catch(Exception e) {
			return false;		
			}
		return true;
	}
	
	@PutMapping("/update")
	public void update(@RequestBody Employee employee) {
		System.out.println("Updating...");
		es.update(employee);
	}

}
