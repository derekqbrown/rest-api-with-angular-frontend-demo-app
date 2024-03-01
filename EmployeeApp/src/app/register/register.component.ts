import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  constructor(public dataService:DataService){ 
    dataService.employee = new Employee();
   }

  showPassword:String = "password";
  togglePassword(){
    if(this.showPassword === "password"){
      this.showPassword = "text";
    }else{
      this.showPassword = "password";
    }
   
  }

  register(){
    
    let data= this.dataService.postEmployee(this.dataService.employee);
    
    if (!data){
      console.log("Invalid submission");
    }else{
        data.subscribe({
          next: (response:any) =>{
            let emp:Employee|any = response;
            if (emp.employeeId == this.dataService.employee.employeeId){
              console.log("Successful registration");
              this.dataService.employeeList.push(emp);
              localStorage.setItem("token", emp.employeeId);
            }
            
          },
          error: (err:any) =>{console.log(err)}
        })
      
    }

  }
  
}