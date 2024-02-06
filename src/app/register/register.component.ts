import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ){  }

  registerForm = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(4)])),
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.compose([
      Validators.required, 
      // Validators.pattern(
      //   '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'
      //   )
    ])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    gender: this.builder.control('male'),
    role: this.builder.control(''),
    isActive: this.builder.control(false)
  })

  registration(){
    if(this.registerForm.valid){
      this.authService.registerData(this.registerForm.value).subscribe(res=>{
        this.toastr?.success(
          'Please contact Admin to enable to access user',
          'Registration Successful'
        )
        this.router.navigate(['login'])
      })
    }else{
      this.toastr?.warning('Please Fill correct data')
    }
  }
}
