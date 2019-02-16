import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddSchoolUserServiceService } from '../services/add-school-user-service.service'
@Component({
  selector: 'app-add-school-user',
  templateUrl: './add-school-user.component.html',
  styleUrls: ['./add-school-user.component.scss']
})
export class AddSchoolUserComponent {
  addressForm = this.addSchoolUser.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    userName: [null, Validators.required],
    phoneNumber: [null, Validators.required],
    email: [null, [Validators.email,Validators.required]],
    password: [null, Validators.required]

  });  

  constructor(private addSchoolUser: FormBuilder,private add_school_user_service: AddSchoolUserServiceService) {}

  onSubmit() {
    var jsonPostData = {
      "title": 'addschooluser',
      "body": {
        "SchoolId": "1",
        "Mobile": this.addressForm.value['phoneNumber'],
        "Password":  this.addressForm.value['password'],
        "Name": this.addressForm.value['firstName']+" "+ this.addressForm.value['lastName'],
        "Username": this.addressForm.value['userName'],
        "Email": this.addressForm.value['email'],
        
      }
    }
    this.add_school_user_service.create_school_user(jsonPostData).subscribe((data)=>{
      //debugger;
      if(data["success"]=="false")
        alert(data["message"]);
      else if(data["success"]=="true")
        alert(data["message"]);

    });
    
  }
}
