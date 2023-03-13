import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/Services/security.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent {

  constructor( public securityService:SecurityService, private router: Router ){}

  public async ngOnInit() {
  
  }
  
  onLogout() {
    this.securityService.kcService.logout(window.location.origin);
  }
}
