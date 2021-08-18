import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  /**
   * The `@Input()` and `@Output()` are decorators.
   * 
   * `@Input()` and `@Output()` give a child component a way to communicate with its parent component.
   * `@Input()` lets a parent component update data in the child component.
   * `@Output()` lets the child send data to a parent component.
   */
  @Input()
  appareilName!: string;
  @Input()
  appareilStatus!: string;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }
}
