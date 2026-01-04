import { afterRender, Component, ElementRef, model, viewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  aberto = model(false);

  modal = viewChild.required<ElementRef<HTMLDialogElement>>('modal');

  constructor() {
    afterRender(() => {
      if (this.aberto()) {
          this.modal().nativeElement.showModal();
        }
        else {
        this.modal().nativeElement.close();
      }
    });
  }

  hideModal() {
    this.aberto.set(false);
  }
}
