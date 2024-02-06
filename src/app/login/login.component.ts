import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    userData: any;
    constructor(
      private builder: FormBuilder,
      private toastr: ToastrService,
      private authService: AuthService,
      private router: Router
    ){ 
      sessionStorage.clear()
     }
  
    loginForm = this.builder.group({
      username: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required),
    })
  
    login(){
      if(this.loginForm.valid && this.loginForm.value.username){
        this.authService.getById(this.loginForm.value.username).subscribe(res=>{
          this.userData = res
          if(this.userData.password === this.loginForm.value.password){
            if(this.userData.isActive){
              sessionStorage.setItem('username', this.userData.id);
              sessionStorage.setItem('role', this.userData.role);
              this.router.navigate([''])
            } else {
                this.toastr?.error('Please contact to admin','In Active User!');
            }
          } else {
            this.toastr.error('Invalid credentials')
          }
        })
      } else {
        this.toastr?.warning('Please enter valid data')
      }
    }
  
}
