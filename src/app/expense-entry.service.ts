import { Injectable } from '@angular/core';
import { ExpenseEntry } from './expense-entry';
import { Observable, throwError } from 'rxjs';
import { catchError  } from 'rxjs/operators'; 
import { HttpClient, HttpHeaders, HttpErrorResponse } from 
'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseEntryService {

 

  constructor(private httpclinet:HttpClient) { }

  getAllExpenseEntries():Observable<ExpenseEntry>{
     const expenseRestUrl =  "https://my-json-server.typicode.com/pramod0024/dbdata/products";
     return this.httpclinet.get<ExpenseEntry>(expenseRestUrl)
  }

  viewExpenseEntry(expenseId):Observable<ExpenseEntry>{
    const expenseRestUrl =  "https://my-json-server.typicode.com/pramod0024/dbdata/products/"+expenseId;
    return this.httpclinet.get<ExpenseEntry>(expenseRestUrl)
  }

  AddExpenseEntry(expensebody):Observable<ExpenseEntry>{
    const expenseRestUrl = "https://my-json-server.typicode.com/pramod0024/dbdata/products/";
    return this.httpclinet.post<ExpenseEntry>(expenseRestUrl,expensebody);
  }

  updateExpenseEntry(expenseId,expensebody):Observable<ExpenseEntry>{
    const expenseRestUrl = "https://my-json-server.typicode.com/pramod0024/dbdata/products/"+expenseId;
    return this.httpclinet.put<ExpenseEntry>(expenseRestUrl,expensebody);
  }

  deleteExpenseEntry(expenseId):Observable<ExpenseEntry>{
    const expenseRestUrl = "https://my-json-server.typicode.com/pramod0024/dbdata/products/"+expenseId;
    return this.httpclinet.delete<ExpenseEntry>(expenseRestUrl);
  }
 

}
