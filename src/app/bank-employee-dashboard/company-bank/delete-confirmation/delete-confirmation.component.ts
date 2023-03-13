import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent {

  @Output() showModal = new EventEmitter<{modal: boolean}>();

  callToggleModal() {
    this.showModal.emit({modal: false});
  }
}
