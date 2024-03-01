import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  employeeList: any;

  employee:Employee|any;

  email?:String;
  password?:String;

  subscriber:any;
  
  constructor(private http:HttpClient, private router:Router) { }

  getAllEmployees(){
    return this.http.get("http://localhost:8080/getEmployees");
  }
  getEmployeeById(id:number){
    let url = "http://localhost:8080/getEmployee/"+id;
    return this.http.get(url);
  }

  loginEmployee(f:NgForm){
    this.employee = f.value;
    if(f.invalid){
      return;
    }
    return this.http.post("http://localhost:8080/login", this.employee);
  
  }
  postEmployee(f:NgForm) {
    this.employee = f.value;
    if(f.invalid){
      return;
    }
    return this.http.post("http://localhost:8080/register", this.employee);
  }
  insertEmployee(e:Employee){
    return this.http.post("http://localhost:8080/register", this.employee);
  }
  deleteEmployee(id:number){
    if(window.confirm("Delete Employee with ID = " + id + "?")){
      let url = "http://localhost:8080/delete/"+id;
      return this.http.delete(url);
    }
    return null;
  }
  updateEmployee(employee: Employee){
    return this.http.put("http://localhost:8080/update", employee);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(["/home"])
    this.employeeList = []
  }


}
