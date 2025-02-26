import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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
  @ViewChild('certificateTypeForm') certificateTypeForm!: NgForm;

  certificateType = {
    name: '',
    description: '',
  };

  constructor(private certificateTypeService: CertificateTypeService) {}

  saveCertificateType() {
    if (this.certificateTypeForm.invalid) {
      alert('Lütfen tüm zorunlu alanları doldurun.');
      return;
    }
    this.certificateTypeService.addCertificateType({ ...this.certificateType });
    alert('Certificate Type Added!');

    this.certificateTypeForm.resetForm();
  }
}
