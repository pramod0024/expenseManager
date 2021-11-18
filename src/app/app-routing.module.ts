import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ExpenseGuard } from './expense.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  
  { path: 'logout', component: LogoutComponent },
 {
   path : 'expenses' ,component: ExpenseEntryListComponent,canActivate:[ExpenseGuard]
 },
 {
   path : 'expenses/expenses-detail/:id' , component : ExpenseEntryComponent,canActivate:[ExpenseGuard]
 },
 { path: 'expenses/edit/:id', component: EditEntryComponent, canActivate: [ExpenseGuard]},
 { path: 'expenses/add', component: EditEntryComponent, canActivate: [ExpenseGuard]},
// { path: '', redirectTo: 'expenses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
