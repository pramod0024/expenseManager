import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {ExpenseEntry} from "../expense-entry"
import { ExpenseEntryService } from '../expense-entry.service';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css']
})
export class ExpenseEntryComponent implements OnInit {

  expenseEntryDetails:ExpenseEntry
  constructor(private activatedroute:ActivatedRoute,private expenseentryservice:ExpenseEntryService,private router:Router) { }

  expenseId:any;
  ngOnInit(): void {

    this.activatedroute.params.subscribe(data=>{
          this.expenseId = data.id;
    })

    if(this.expenseId){
      this.expenseentryservice.viewExpenseEntry(this.expenseId).subscribe(data=>{
        this.expenseEntryDetails = data;
      }) 
    }
    
 
  }
  goToEdit(){
    this.router.navigate(['/expenses/edit',this.expenseId])
  }

  gotolist(){
    this.router.navigate(["/expenses"]);
  }
}
