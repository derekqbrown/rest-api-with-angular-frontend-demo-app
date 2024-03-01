package com.example.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer>{
	
	Optional<Employee> findByEmail(String email);
	
	@Modifying
	@Transactional
	@Query("update from Employee set firstName=:firstName, lastName=:lastName, email=:email, password=:password, salary=:salary, department=:department where employeeId=:employeeId")
	void update(@Param("employeeId") int employeeId, @Param("firstName") String firstName, @Param("lastName") String lastName, @Param("email") String email, @Param("password") String password, @Param("salary") int salary,@Param("department") String department);
}
