/**
 * Created by aumiller on 5/31/2017.
 */
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import Timer = NodeJS.Timer;

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent implements OnInit {
  // One event emitter, with value of increment.
  increment = 0;
  @Output() intervalEvent = new EventEmitter<{ number: Number }>();
  interval = null;

  startIncrement() {
    if (this.interval) {
      this.stopIncrement();
    }
    this.interval = setInterval(() => {
      // up the increment
      this.increment++;
      // emit event
      this.intervalEvent.emit({number: this.increment});
    }, 1000);
  }

  stopIncrement() {
    clearInterval(this.interval);
  }

  constructor() {

  }

  ngOnInit() {
    console.log(typeof this.increment);
  }

}
