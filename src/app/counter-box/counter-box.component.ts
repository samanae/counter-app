import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-box',
  templateUrl: './counter-box.component.html',
  styleUrls: ['./counter-box.component.scss']
})
export class CounterBoxComponent {
 count: number = 0;

  addNumber() {
    this.count += 1;
  }

  removeNumber() {
    this.count -= 1;
  }

  resetNumber() {
    this.count = 0;
  }
}
