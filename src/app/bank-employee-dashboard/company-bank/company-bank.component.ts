import { Component } from '@angular/core';
import {companyModel} from "./company.model";

@Component({
  selector: 'app-company-bank',
  templateUrl: './company-bank.component.html',
  styleUrls: ['./company-bank.component.scss']
})
export class CompanyBankComponent {

  companyOveriewData: companyModel[] = [
      new companyModel("One Tech Business Solutions", "contact@otbs.tn", "71551221"),
    new companyModel("One Tech Holding", "contact@oth.tn", "71551421"),
    new companyModel("Google", "contact@google.com", "71581221"),
  ];


  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
    console.log(this.showModal)
  }
  recieveModal(modalData: {modal: boolean}){
    this.showModal = modalData.modal
  }
}
