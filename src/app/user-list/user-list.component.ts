import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(
    private authService: AuthService
  ){}
  
  userList: any;
  dataSource: any;
  displayedColumns: string[] = ['username', 'email', 'name','role','status', 'action']
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
      this.loadUser()
  }
  loadUser(){
    this.authService.getAll().subscribe(res=>{
      this.userList = res;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
    })
  }
  
  updatePopup(elementId: any){
      
  }
}
