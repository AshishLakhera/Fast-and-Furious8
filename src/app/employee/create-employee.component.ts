import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormControl,FormBuilder,Validator, Validators} from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { groupBy } from 'rxjs/internal/operators/groupBy';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
employeeForm:FormGroup;
//fullNameLength=0;
validationMessages={
'fullName':{
  'required':'Full Name is required',
  'minlength':'full Name is greator than 2 char',
  'maxlength':'full Name is less than 15 char'
},
'email':{
  'required':'Email is required',
},
'skillName':{
  'required':'Skill Name is required',
},
'experienceInYear':{
  'required':'experienceInYear is required',
},
'Proficiency':{
  'required':'Proficiency is required'
},
}
formErrors={

  'fullName':'',
  'email':'',
  'skillName':'',
  'Proficiency':''
};
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
//   this.employeeForm=new FormGroup({
// fullName:new FormControl(),
// email:new FormControl(),
// skills:new FormGroup({
//   skillName:new FormControl(),
// experienceInYear:new FormControl(),
// Proficiency: new FormControl()
// })
//});
this.employeeForm = this.fb.group({
  fullName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
  email:['',Validators.required],
  skills:this.fb.group({
skillName:['',Validators.required],
experienceInYear:['',Validators.required],
Proficiency:['',Validators.required] 

  })
});



// this.employeeForm.get('skills').valueChanges.subscribe((value:any)=>{
//   // this.fullNameLength=value.length;
//   console.log(JSON.stringify(value));
// });

  
  }
  logValidationErrors(group:FormGroup): void {

   Object.keys(group.controls).forEach((key:string)=>{
    const abstractControl= group.get(key);
    if(abstractControl instanceof FormGroup){
      this.logValidationErrors(abstractControl)
      //abstractControl.disable();
    }else{
      //console.log('Key= ' +key + 'value= '+ abstractControl.value);
     // abstractControl.disable();
     this.formErrors[key]='';
     if(abstractControl &&!abstractControl.valid)
     {
       const message = this.validationMessages[key];
       console.log(message);
       //console.log(abstractControl.errors)
       for(const errorKey in abstractControl.errors)
       {
         if(errorKey)
         {
           this.formErrors[key]+=message[errorKey] +'  ';
         }
       }
     }
    }
   });
    } 
onSubmit():void{
console.log(this.employeeForm)

}
onLoadDataClick():void{
//   this.employeeForm.patchValue({
// fullName:'Test',
// email:'test1',
// skills:{
// skillName:'t1',
// experienceInYear:'1',
// Proficiency:'beginner'

// }

//   })
this.logValidationErrors(this.employeeForm);
console.log(this.formErrors);
}
}
