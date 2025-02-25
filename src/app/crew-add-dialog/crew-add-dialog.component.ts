// import { Component } from '@angular/core';
// import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
// import { FormsModule } from '@angular/forms';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { Crew } from '../models/crew.model';
// import { CommonModule } from '@angular/common';
// import { CertificateTypeService } from '../services/certificate-type.service';

// @Component({
//   selector: 'app-crew-add-dialog',
//   standalone: true,
//   imports: [
//     CommonModule,
//     MatDialogModule,
//     FormsModule,
//     MatInputModule,
//     MatSelectModule,
//     MatButtonModule,
//     MatIconModule,
//   ],
//   templateUrl: './crew-add-dialog.component.html',
// })
// export class CrewAddDialogComponent {
//   crew: Partial<Crew> = { certificates: [] };

//   nationalities = ['American', 'French', 'Portuguese'];
//   titles = ['Captain', 'Engineer', 'Cooker', 'Mechanicer'];
//   currencies = ['USD', 'EUR'];

//   certificateTypes: { name: string; description: string }[] = [];

//   constructor(
//     public dialogRef: MatDialogRef<CrewAddDialogComponent>,
//     private certificateTypeService: CertificateTypeService
//   ) {}

//   ngOnInit(): void {
//     this.certificateTypes = this.certificateTypeService.getCertificateTypes();
//   }

//   addCertificate() {
//     this.crew.certificates?.push({ type: '', issueDate: '', expiryDate: '' });
//   }

//   removeCertificate(index: number) {
//     this.crew.certificates?.splice(index, 1);
//   }

//   save() {
//     this.dialogRef.close(this.crew);
//   }

//   close() {
//     this.dialogRef.close();
//   }
// }

import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Crew, Certificate } from '../models/crew.model';
import { CommonModule } from '@angular/common';
import { CertificateTypeService } from '../services/certificate-type.service';

@Component({
  selector: 'app-crew-add-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './crew-add-dialog.component.html',
})
export class CrewAddDialogComponent implements OnInit {
  crew: Partial<Crew> = { certificates: [] };

  nationalities = ['American', 'French', 'Portuguese'];
  titles = ['Captain', 'Engineer', 'Cooker', 'Mechanicer'];
  currencies = ['USD', 'EUR'];

  certificateTypes: { name: string; description: string }[] = [];

  constructor(
    public dialogRef: MatDialogRef<CrewAddDialogComponent>,
    private certificateTypeService: CertificateTypeService
  ) {}

  ngOnInit(): void {
    this.certificateTypes = this.certificateTypeService.getCertificateTypes();
  }

  addCertificate() {
    this.crew.certificates?.push({
      type: '',
      issueDate: '',
      expiryDate: '',
      description: '',
    });
  }

  removeCertificate(index: number) {
    this.crew.certificates?.splice(index, 1);
  }

  save() {
    this.dialogRef.close(this.crew);
  }

  close() {
    this.dialogRef.close();
  }
}
