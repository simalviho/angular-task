import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CertificateTypeService } from '../services/certificate-type.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-certificate-type-create',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './certificate-type-create.component.html',
})
export class CertificateTypeCreateComponent {
  certificateType = {
    name: '',
    description: '',
  };

  constructor(private certificateTypeService: CertificateTypeService) {}

  saveCertificateType() {
    if (!this.certificateType.name.trim()) {
      alert('Certificate Name is required');
      return;
    }

    this.certificateTypeService.addCertificateType({ ...this.certificateType });
    alert('Certificate Type Added!');

    this.certificateType = { name: '', description: '' };
  }
}
