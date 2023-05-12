import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Service/UserService/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup
  signupForm! : FormGroup
  backgroundChange : boolean = false
  token : any

  constructor(private formbuilder : FormBuilder,
    private userService : UserService, 
    private snackbar : MatSnackBar,
    private route : Router){}

  ngOnInit(){
    this.loginForm = this.formbuilder.group({
      email : ['',[Validators.required]],
      password : ['',[Validators.required]]
    })

    this.signupForm = this.formbuilder.group({
      fullname : ['',[Validators.required]],
      Email : ['',[Validators.required]],
      passWord : ['',[Validators.required]],
      mobilenumber :['',[Validators.required]]
    })
  }

  onBGChange(){
    this.backgroundChange = !this.backgroundChange;
  }

  logIn(){
    if(this.loginForm.valid){
      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }

      this.userService.logInService(reqData).subscribe((result : any) => {
        console.log(result);
        this.snackbar.open("Log-in successfully","",{
          duration : 2000
        })
         localStorage.setItem('token',result.accessToken);
         this.route.navigateByUrl('/dashboard');
        
        
      })
    } else {
      this.snackbar.open("User not found","",{
        duration : 3000
      });
      
    }
  }

  signUp(){
    if(this.signupForm.valid){
      let reqData = {
        fullName: this.signupForm.value.fullname,
        email: this.signupForm.value.Email,
        password: this.signupForm.value.passWord,
        phone: this.signupForm.value.mobilenumber
      }

      this.userService.signUpService(reqData).subscribe((result : any) => {
        console.log(result);
        this.snackbar.open("Registered Successfully !!!","",{
          duration : 2500
        })
      })
    } else {
      this.snackbar.open("Registered unsuccessful !!!","",{
        duration : 3000
      })
    }
  }

  
}
