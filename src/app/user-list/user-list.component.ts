import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private dialog: MatDialog
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
  
  updatePopup(id: any){
      this.dialog.open(UpdatepopupComponent),{
        enterAnimationDuration:'1000ms',
        exitAnimationDuration: '500ms',
        width: "50%",
        data:{
          username:id
        }
      }
  }
}
