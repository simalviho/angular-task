import { Routes } from '@angular/router';
import { CertificateTypeCreateComponent } from './certificate-type-create/certificate-type-create.component';
import { CrewListComponent } from './crew-list/crew-list.component';

export const routes: Routes = [
  { path: '', component: CrewListComponent },
  {
    path: 'certificate-type-create',
    component: CertificateTypeCreateComponent,
  },
  { path: '**', redirectTo: '' },
];
