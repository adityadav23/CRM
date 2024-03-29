import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseAPI = 'http://localhost:3000/user'
  constructor( private http: HttpClient) { };

  getAll(){
    return this.http.get(this.baseAPI);
  }

  getById(id:string ){
    return this.http.get(this.baseAPI+'/'+id);
  }

  registerData(inputData: any){
    return this.http.post(this.baseAPI, inputData);
  }

  updateData(id: string, updateData: any){
    return this.http.put(this.baseAPI+'/'+id,updateData);
  }

  isLoggedIn(){
    return sessionStorage.getItem('username') != null
  }
  
  getUserRole(){
    return sessionStorage.getItem('role') != null ?
     sessionStorage.getItem('role')?.toString() :
      '';
  }

  getAllRole(){
    return this.http.get('http://localhost:3000/role')
  }
}
