import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../expense-entry';
import {DebugService} from "../debug.service";
import { ExpenseEntryService } from "../expense-entry.service";
@Component({
  selector: 'app-expense-entry-list',
  templateUrl: './expense-entry-list.component.html',
  styleUrls: ['./expense-entry-list.component.css']
})
export class ExpenseEntryListComponent implements OnInit {

  expenseEntries:ExpenseEntry;
  title:string;
  constructor(private deubug:DebugService,private expenseentryservice:ExpenseEntryService) { }

  ngOnInit(): void {

    this.title = "Expense entry list";
     this.expenseentryservice.getAllExpenseEntries().subscribe(data=>{
       this.expenseEntries = data;
    })
  }

  deleteExpenseEntry(evt, id){
    evt.preventDefault();

    if(confirm("Are you sure to delete the entry?")){
      this.expenseentryservice.deleteExpenseEntry(id).subscribe(data=>{
        console.log(data);
        
      })
      this.expenseentryservice.getAllExpenseEntries().subscribe(data11=>{
        this.expenseEntries = data11;
     })
    }

  }



}
