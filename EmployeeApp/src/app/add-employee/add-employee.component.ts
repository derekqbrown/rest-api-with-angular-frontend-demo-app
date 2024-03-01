import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../model/employee';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  
  constructor(public dataService:DataService, private location:Location){
    dataService.employee = new Employee();
  }

  add(){
    let emp = this.dataService.employee;

    if (emp.employeeId == null || emp.firstName == null || emp.lastName == null){
      console.log("A required field was left blank.")
      return;
    }

    this.dataService.employee.email = emp.firstName +"."+emp.lastName +"."+emp.employeeId+"@example.com";
    this.dataService.employee.password= "default";
    
    let data =this.dataService.insertEmployee(this.dataService.employee);

    if(!data){
      console.log("Error has occurred when attempting to insert employee.")
      return;
    }
    data.subscribe({
      next: (addedEmployee:any|Employee) =>{
        this.dataService.employeeList.push(this.dataService.employee);
        this.dataService.employee = new Employee();
      },
      error: (err:any) =>{console.log(err)}
    })
    
    this.location.back();
  }

  cancel(){
    this.location.back();
  }

}
