import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even-row',
  templateUrl: './even-row.component.html',
  styleUrls: ['./even-row.component.css']
})
export class EvenRowComponent implements OnInit {

  @Input() tile: number;

  constructor() { }

  ngOnInit() {
  }

}
