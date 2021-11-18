import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expenseManager';
  isUserLoggedIn = false ;

  constructor(private authService:AuthService){
    let storeData = localStorage.getItem("isUserLoggedIn");

    if(storeData !=null && storeData == "true"){
      this.isUserLoggedIn = true;
    }else{
      this.isUserLoggedIn = false;
    }
  }

  ngOnInit(){

 
    
  }
}
