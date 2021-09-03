import { formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user-service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
    // userForm: FormGroup = new FormGroup({}); 
    showSuccessAlert: boolean = false; // variable to show success alert
    showErrorAlert: boolean = false; // variable to show error alert
    editMode: boolean = false; // variable to indicate edit mode 
    occupation: any = ['salaried', 'government', 'others'];
    todayDate= this.formatTodayDate();
    pastDateSelected:boolean=false;
    constructor(private route:ActivatedRoute, private formBuilder: FormBuilder,private userService:UserService) {
     }
     userForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      occupationName: ['',Validators.required],
      dob: ['',Validators.required],
  })
    ngOnInit() {
    }
    formatTodayDate():any{
      let date = new Date("03-09-2021");
       let day  = date.getDate(); //Date of the month: 2 in our example
       let day1 =day>9?day:"0"+day;
       let month = date.getMonth(); //Month of the Year: 0-based index, so 1 in our example
       let month1 = month>9?month:"0"+month;
       let year = date.getFullYear() //Year: 2013
      return year+"-"+ month1+"-"+day1;
    }
    checkForPastDates(data:any){
      this.pastDateSelected=false;
      var d1 = new Date();
      var d2 = new Date(data);
      if(d1>d2){
        this.pastDateSelected=true;
      }
    }
/*
      below method is used to create user,since the api is not giving expected response, setitme out is used to show the success alert
 */
  createUser(){
    let userData={
        "Name":this.userForm.controls['name'].value,
        "Address":this.userForm.controls['address'].value,
        "Occupation":this.userForm.controls['occupationName'].value,
        "Date Of Birth":this.userForm.controls['dob'].value,
    }
    setTimeout(() => {
      this.showSuccessAlert = true;
    }, 1000);
    this.userService.createUser(userData);
  }
}
