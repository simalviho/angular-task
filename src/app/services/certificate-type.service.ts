import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CertificateTypeService {
  private certificateTypes: { name: string; description: string }[] = [];

  addCertificateType(certificateType: { name: string; description: string }) {
    this.certificateTypes.push(certificateType);
    console.log('New Certificate Type Added:', this.certificateTypes);
  }

  getCertificateTypes() {
    return [...this.certificateTypes];
  }
}
