import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CertificateTypeService {
  private certificateTypes: { name: string; description: string }[] = [];

  addCertificateType(certificateType: { name: string; description: string }) {
    this.certificateTypes.push(certificateType);
  }

  getCertificateTypes() {
    return [...this.certificateTypes];
  }
}
