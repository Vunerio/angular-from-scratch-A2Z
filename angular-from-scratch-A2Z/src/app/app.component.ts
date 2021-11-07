import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentNavSelected = 1
  
  constructeur() {}

  isNavSelected(navId: number): boolean {
    return this.currentNavSelected === navId;
  }

  selectNav(navId: number): void {
    console.log(this.currentNavSelected, navId);
    this.currentNavSelected = navId;
  }
}
