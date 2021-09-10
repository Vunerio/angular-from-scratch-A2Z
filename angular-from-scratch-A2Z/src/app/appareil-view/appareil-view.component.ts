import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  title = 'Angular From Scratch (A to Z)';
  
  isAuth = false;

  // The async pipe subscribes to an Observable or Promise and returns the latest value it has emitted.
  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          let zeroDecimalOfMinutes: string = "";
          if (date.getMinutes() < 9) {
            zeroDecimalOfMinutes = "0";
          }
            
          resolve(date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay() + ", " + date.getHours() + ":" + zeroDecimalOfMinutes + date.getMinutes());
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
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }
}
