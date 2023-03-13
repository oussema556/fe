import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingModule} from './features/landing/landing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {BankEmployeeDashboardModule} from "./bank-employee-dashboard/bank-employee-dashboard.module";
import {SharedModule} from "./shared/shared.module";
import {BankModule} from "./features/bank/bank.module";


export function kcFactory(ksService : KeycloakService) {

  return ()=>{
    ksService.init({
      config : {
        url: 'http://localhost:8080/',
        realm: 'springBootKeycloak',
        clientId: 'spring-client'
      },
      initOptions : {
        onLoad : "check-sso", checkLoginIframe : true
        //silentCheckSsoRedirectUri:
          //window.location.origin + '/assets/silent-check-sso.html'
      }
    })

  }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    LandingModule,
    BankEmployeeDashboardModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
      SharedModule,
      BankModule
  ],
  providers: [
    {provide : APP_INITIALIZER , 
      deps: [KeycloakService],
      useFactory : kcFactory ,
       multi : true} //multi providers
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
