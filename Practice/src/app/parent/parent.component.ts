import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  destroy = true;
  inputTExt: string = '';
  DestroyComponent() {
    this.destroy = false;
  }

  OnSubmit(inputEl: HTMLInputElement) {
    this.inputTExt = inputEl.value;
  }

}
