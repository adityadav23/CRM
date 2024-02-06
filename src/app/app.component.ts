import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  isMenuRequire = false;
  constructor(
    private router: Router
  ){}
  ngDoCheck(): void {
      let currentUrl = this.router.url;
      if(['/login','/register'].includes(currentUrl)){
        this.isMenuRequire = false;
      } else {
        this.isMenuRequire = true;
      }
  }
}
