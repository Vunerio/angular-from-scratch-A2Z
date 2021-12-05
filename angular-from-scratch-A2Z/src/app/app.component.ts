import { Component } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentNavSelected?: number;
  
  constructor(private router: Router) {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        
        if (event.url === "/path"){
          this.currentNavSelected = 2;
        } else {
          this.currentNavSelected = 1;
        }
      }
    });
  }

  isNavSelected(navId: number): boolean {
    return this.currentNavSelected === navId;
  }

  selectNav(navId: number): void {
    this.currentNavSelected = navId;
  }
}
