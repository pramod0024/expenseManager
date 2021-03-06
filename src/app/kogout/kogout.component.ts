import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-kogout',
  templateUrl: './kogout.component.html',
  styleUrls: ['./kogout.component.css']
})
export class KogoutComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
