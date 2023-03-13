import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BankEmplyeeHomeComponent} from './bank-emplyee-home/bank-emplyee-home.component';
import {RouterModule, Routes} from "@angular/router";
import { NavbarBankComponent } from './navbar-bank/navbar-bank.component';
import { CompanyBankComponent } from './company-bank/company-bank.component';
import {NgForOf, NgIf} from "@angular/common";
import { CompanyBankEditComponent } from './company-bank/company-bank-edit/company-bank-edit.component';
import { DeleteConfirmationComponent } from './company-bank/delete-confirmation/delete-confirmation.component';
import { PaginationComponent } from './company-bank/pagination/pagination.component';


const routes: Routes = [
  { path: 'home', component: BankEmplyeeHomeComponent },
  {path: 'enterprises', component: CompanyBankComponent},
  {path: 'enterprises/edit', component:CompanyBankEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgIf, NgForOf],
  exports: [RouterModule],
  declarations: [
    NavbarBankComponent,
    BankEmplyeeHomeComponent,
    CompanyBankComponent,
    CompanyBankEditComponent,
    DeleteConfirmationComponent,
    PaginationComponent,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class BankEmployeeDashboardModule { }
