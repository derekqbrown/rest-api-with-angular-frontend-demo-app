import { Component, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Employee } from '../model/employee';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

  constructor(public dataService:DataService, private location:Location){}

  update(){
    let data =this.dataService.updateEmployee(this.dataService.employee);
    data.subscribe({
      next: (updatedEmployee:any|Employee) =>{
        const index = this.dataService.employeeList.findIndex((e: { employeeId: number | null | undefined; }) => e.employeeId === this.dataService.employee.employeeId);
        if (index > -1){
          this.dataService.employeeList.splice(index, 1);
          this.dataService.employeeList.push(updatedEmployee);
        }
      },
      error: (err:any) =>{console.log(err)}
    })
    this.dataService.employee = new Employee();
    this.location.back();
  }

  cancel(){
    this.location.back();
  }
}
