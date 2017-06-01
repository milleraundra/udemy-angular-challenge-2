import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tileItems: Array<Number> = [];
  // numberIsEven: Boolean = true;

  newIncrement(increment: { number: number }) {
    this.tileItems.push(increment.number);
    console.log(this.tileItems);
  }

  numberIsEven(increment: any): boolean {
    console.log(increment);
    return increment % 2 === 0;
    // return true;
    // console.log(number);
    // console.log(number % 2 === 0);
  }
}
