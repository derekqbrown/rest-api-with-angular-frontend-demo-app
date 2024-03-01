import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { UpdateComponent } from './update/update.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'employees', component:EmployeeComponent, canActivate:[loginGuard],
    children:[
      {path:'addEmployee', component:AddEmployeeComponent},
      {path:'updateEmployee', component:UpdateComponent},
      {path:'viewEmployee', component:ViewEmployeeComponent}

    ]
  },
  {path:'**', component:ErrorComponent}
  
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
