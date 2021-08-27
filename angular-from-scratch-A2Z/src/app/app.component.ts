import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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

  appareils!: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    console.log('On allume tout !');
  }
}
