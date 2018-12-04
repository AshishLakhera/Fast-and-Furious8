import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//const routes: Routes = [];
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeeComponent } from './employee/list-employee.component';
import { AppRoutingmoduleModule } from './app-routingmodule.module';

const routes: Routes = [
  {path:'list',component:ListEmployeeComponent},
   {path:'create',component:CreateEmployeeComponent},
 {path:'',redirectTo:'/list',pathMatch:'full'},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
