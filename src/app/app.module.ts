import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeeComponent } from './employee/list-employee.component';
import { AppRoutingmoduleModule } from './app-routingmodule.module';


const approutes: AppRoutingModule = [
  {path:'/list',component:ListEmployeeComponent},
   {path:'/create',component:CreateEmployeeComponent},
 {path:'',redirectTo:'/list',pathMatch:'full'},
];

@NgModule({
   declarations: [
    AppComponent,
     CreateEmployeeComponent,
     ListEmployeeComponent
   ],
  imports: [
     BrowserModule,
     
    AppRoutingModule,
     AppRoutingmoduleModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
