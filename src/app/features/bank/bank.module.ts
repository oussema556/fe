import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './02-containers/dashboard/dashboard.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterOutlet} from "@angular/router";
import { GeneralComponent } from './02-containers/general/general.component';
import { SepecifComponent } from './02-containers/sepecif/sepecif.component';



@NgModule({
  declarations: [
    DashboardComponent,
    GeneralComponent,
    SepecifComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterOutlet
  ]
})
export class BankModule { }
