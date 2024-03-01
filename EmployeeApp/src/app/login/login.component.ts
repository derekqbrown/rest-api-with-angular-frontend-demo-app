import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  token!:string;

  constructor(public dataService:DataService){}

  login(f:NgForm){
    let data= this.dataService.loginEmployee(f);
    
    if (!data){
      console.log("Invalid submission");
    }else{
      data.subscribe({
        next: (response:any) =>{
          this.token = response;
          localStorage.setItem("token", this.token);
          console.log(localStorage.length);
        },
        error: (err:any) =>{console.log(err)}
      })
    }
    


  }

}
