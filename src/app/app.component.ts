import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `<li *ngFor="let hero of heroes"></li>`,
})
export class AppComponent  { name = 'Angular'; }
