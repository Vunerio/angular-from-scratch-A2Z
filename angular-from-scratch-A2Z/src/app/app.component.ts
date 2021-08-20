import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular From Scratch (A to Z)';

  isAuth = false;

  // The async pipe subscribes to an Observable or Promise and returns the latest value it has emitted.
  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay() + ", " + date.getHours() + ":" + date.getMinutes());
        }, 2000
      );
    }
  );

  appareils = [
    {
      name: 'Machine à laver',
      status: 'Éteint'
    },
    {
      name: 'Télévion',
      status: 'Allumé'
    },
    {
      name: 'Ordinateur',
      status: 'Éteint'
    }
  ];

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
