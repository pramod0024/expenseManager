import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseEntry } from '../expense-entry';
import { ExpenseEntryService } from '../expense-entry.service';
@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css']
})
export class EditEntryComponent implements OnInit {

  expenseEntry:ExpenseEntry;
  formData:FormGroup;
  selectedId:any;
  constructor(private route:ActivatedRoute,private expenseservice:ExpenseEntryService,private router:Router) { }


  ngOnInit(): void {

    this.formData = new FormGroup({
      id:new FormControl(),
      item:new FormControl('',[Validators.required]),
      amount:new FormControl('',[Validators.required]),
      category:new FormControl(),
      location:new FormControl(),
      spendOn:new FormControl()
    })

    this.selectedId = this.route.snapshot.paramMap.get('id');

    if(this.selectedId !=null && this.selectedId !=0){
      
       this.expenseservice.viewExpenseEntry(this.selectedId).subscribe(data=>{
          
         this.expenseEntry =data;

         this.formData.controls['id'].setValue(this.expenseEntry.id);
         this.formData.controls['item'].setValue(this.expenseEntry.item);
         this.formData.controls['amount'].setValue(this.expenseEntry.amount);
         this.formData.controls['category'].setValue(this.expenseEntry.category);
         this.formData.controls['location'].setValue(this.expenseEntry.location);
         this.formData.controls['spendOn'].setValue(this.expenseEntry.spendOn);

       })
    }

  }

     get itemValue() {
    return this.formData.get('item');
    }
 
    get amountValue() {
    return this.formData.get('amount');
    }

    onClickSubmit(data:any){
      let expenseEntry : ExpenseEntry = {
        id: data.id,
         item: data.item,
         amount: data.amount,
         category: data.category,
         location: data.location,
         spendOn: data.spendOn,
         createdOn: new Date(2020, 5, 20)
     }

       if(expenseEntry.id == null || expenseEntry.id==0){
         this.expenseservice.AddExpenseEntry(expenseEntry).subscribe(data=>{
           this.router.navigate(['/expenses']);
         })
       }else{
         this.expenseservice.updateExpenseEntry(this.selectedId,expenseEntry).subscribe(data=>{
           this.router.navigate(['/expenses']);
         })
       }

    }
}
