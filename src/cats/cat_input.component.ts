import { Component, Input } from "@angular/core";

@Component({
  selector: "cat-input",
  template: `
    <div class="input__container">
      <label>Insert the cat name:</label>
      <input type="text" [(ngModel)]="name">
      <span  class="margin">Name: {{ name }}</span>
    </div>
  `,
  styles: [`
    .margin {
      display: block;
      margin-bottom: 10px;
    }
    .input__container {
      margin: 10px 0;
    }
  `]
})

export class CatInputComponent {
  @Input() name: string;
}

