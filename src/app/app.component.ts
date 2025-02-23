import { Component } from '@angular/core';
import { CrewListComponent } from './crew-list/crew-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CrewListComponent],
  template: `<app-crew-list></app-crew-list>`,
})
export class AppComponent {}
