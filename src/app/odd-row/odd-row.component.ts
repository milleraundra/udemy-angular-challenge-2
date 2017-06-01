import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd-row',
  templateUrl: './odd-row.component.html',
  styleUrls: ['./odd-row.component.css']
})
export class OddRowComponent implements OnInit {

  @Input() tile: number;

  constructor() { }

  ngOnInit() {
  }

}
