import { Component } from '@angular/core';
import { CrewListComponent } from './crew-list/crew-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CrewListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
