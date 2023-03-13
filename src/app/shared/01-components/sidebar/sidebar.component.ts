import { Component } from '@angular/core';
import {SidebarService} from "../../00-services/sidebar/sidebar.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    clickEventsubscription:Subscription;

    constructor(private sidebarService: SidebarService) {
        this.clickEventsubscription=this.sidebarService.openSideBar().subscribe(()=>{
            this.sidebarIsHidden= false;
        })
    }
    sidebarIsHidden: boolean= true;
    closeSidebar() {
        this.sidebarIsHidden= true;
    }



}
