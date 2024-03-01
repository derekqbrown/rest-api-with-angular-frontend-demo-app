import { Component, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  constructor(public dataService:DataService){ 
    this.getEmployeeList(); }

  getEmployeeList(){
    let data = this.dataService.getAllEmployees();
    data.subscribe({
      next: (employees:any|Employee[]) =>{
        this.dataService.employeeList = employees;
      },
      error: (err:any) =>{console.log(err)}
    })
  }

  setEmployee(employee:Employee){
    this.dataService.employee = employee;
  }

  deleteEmployee(id:number){
    
    let data = this.dataService.deleteEmployee(id);
    if (!data){
      console.log("An error has occurred");
    }else
    data.subscribe({
      next: (response:any|boolean) =>{
        if(response == true){
          console.log("Successful deletion");
          location.reload();
        }
      },
      error: (err:any) =>{console.log(err)}
    })

  }
  

}
