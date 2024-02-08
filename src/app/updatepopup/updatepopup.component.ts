import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit{
  roleList:any;

  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ){  }
  ngOnInit(): void {
      this.authService.getAllRole().subscribe(res=>{
        this.roleList = res;
      })
      
  }
  registerForm = this.builder.group({
    id: this.builder.control(''),
    email: this.builder.control(''),
    gender: this.builder.control('male'),
    role: this.builder.control('', Validators.required),
    isActive: this.builder.control(false)
  })

  loadUserData(code:any){
    this.authService.getById(code).subscribe(res=>{

    })
  }
  updateUser(){
    
  }
  openDialog(){}
}
