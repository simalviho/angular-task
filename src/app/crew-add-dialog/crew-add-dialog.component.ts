import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Crew } from '../models/crew.model';
import { CommonModule } from '@angular/common';
import { CertificateTypeService } from '../services/certificate-type.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-crew-add-dialog',
  standalone: true,
  imports: [
    TranslateModule,
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
  @ViewChild('crewForm') crewForm!: NgForm;
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
    if (
      !this.crew.firstName ||
      !this.crew.lastName ||
      !this.crew.nationality ||
      !this.crew.title ||
      !this.crew.daysOnBoard ||
      !this.crew.dailyRate ||
      !this.crew.currency
    ) {
      return;
    }

    this.crew.certificates?.forEach((certificate) => {
      const foundType = this.certificateTypes.find(
        (t) => t.name === certificate.type
      );
      if (foundType) {
        certificate.description = foundType.description;
      }
    });

    this.dialogRef.close(this.crew);
  }

  close() {
    this.dialogRef.close();
  }
}
