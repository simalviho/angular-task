import { Routes } from '@angular/router';
import { CertificateTypeCreateComponent } from './certificate-type-create/certificate-type-create.component';
import { CrewListComponent } from './crew-list/crew-list.component';
import { CrewCardComponent } from './crew-card/crew-card.component';

export const routes: Routes = [
  { path: '', component: CrewListComponent },
  { path: 'crew-card/:id', component: CrewCardComponent },
  {
    path: 'certificate-type-create',
    component: CertificateTypeCreateComponent,
  },
  { path: '**', redirectTo: '' },
];
