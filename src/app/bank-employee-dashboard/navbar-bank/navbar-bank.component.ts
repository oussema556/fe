import { Component } from '@angular/core';
import {SecurityService} from "../../Services/security.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-navbar-bank',
  templateUrl: './navbar-bank.component.html',
  styleUrls: ['./navbar-bank.component.scss']
})
export class NavbarBankComponent {

  constructor(private router: Router, private route: ActivatedRoute, public securityService: SecurityService) {
  }



  isMenuOpened: boolean = false;

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  login() {
    this.securityService.kcService.login();

  }


}
