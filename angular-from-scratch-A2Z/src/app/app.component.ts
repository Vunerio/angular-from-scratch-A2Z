import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular From Scratch (A to Z)';

  isAuth = false;

  appareilOne   = "Machine à laver";
  appareilTwo   = "Télévion";
  appareilThree = "Ordinateur";

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('On allume tout !');
  }
}
