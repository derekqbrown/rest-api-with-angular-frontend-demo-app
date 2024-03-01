import { Component, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Location } from '@angular/common';
import { Employee } from '../model/employee';


@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent {

  constructor(public dataService:DataService, private location:Location){}

  showPassword:String = "password";

  togglePassword(){
    if(this.showPassword === "password"){
      this.showPassword = "text";
    }else{
      this.showPassword = "password";
    }
   
  }

  cancel(){
    this.location.back();
  }
}
