import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BankEmplyeeHomeComponent} from './bank-employee-dashboard/bank-emplyee-home/bank-emplyee-home.component';
import {HomeComponent} from './features/landing/home/home.component';
import {UserHomeComponent} from './user-dashboard/user-home/user-home.component';
import {DashboardComponent} from "./features/bank/02-containers/dashboard/dashboard.component";
import {GeneralComponent} from "./features/bank/02-containers/general/general.component";
import {SepecifComponent} from "./features/bank/02-containers/sepecif/sepecif.component";

const routes: Routes = [
  
  { path: '', component: HomeComponent },

  { path: 'user', component: UserHomeComponent ,
   //canActivate : [AuthGuard] , 
    
  }, 
 // { path: 'user', loadChildren : () => import('./user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule),
  // canActivate : [AuthGuard] ,
 //  data : { roles : ['CUSTOMER']}
 // },
  { path: 'bank', component: BankEmplyeeHomeComponent  },
  { path: 'bibi', component: DashboardComponent,
  children:[
    {
      path: "bobo",
      component: GeneralComponent
    },
    {
      path: 'specific',
     component: SepecifComponent,
    }
  ]}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)
    //, {
   // initialNavigation : 'enabledNonBlocking',
   // preloadingStrategy: PreloadAllModules
  //})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
