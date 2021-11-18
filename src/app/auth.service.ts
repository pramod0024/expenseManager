import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLoggedIn:boolean =false;

  login(userName:string,password:string){
    this.isUserLoggedIn = userName === 'admin' && password ==='admin';
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? 'true' : "false");

    return of(this.isUserLoggedIn).pipe(delay(1000),
    tap(val=>{
      console.log('Is user authentication successfully' , val);
      
    })
    )
  }
  logout(){
    this.isUserLoggedIn =false;
    localStorage.removeItem("isUserLoggedIn");
  }
}
