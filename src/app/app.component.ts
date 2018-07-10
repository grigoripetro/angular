import { Component } from '@angular/core';

@Component({
  selector: 'sample-app',
  template: `<li *ngFor="let hero of heroes"></li>`,
})
export class AppComponent  { name = 'Angular'; }
