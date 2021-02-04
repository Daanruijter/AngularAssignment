import { CanActivate } from '@angular/router';
import {  Router } from '@angular/router';


export class AlwaysAuthGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate(){

    let loginStatus = localStorage.getItem("access_token")

    console.log("AlwaysAuthGuard");
    if(loginStatus){
      return true
    }
    else {
       
      alert("Please login to see this page")
     
      this.router.navigate(['/public/sign-in']);
    return false
    }
  }
}

