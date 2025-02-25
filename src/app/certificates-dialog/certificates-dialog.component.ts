import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Certificate } from '../models/crew.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificates-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatTableModule, MatButtonModule],
  templateUrl: './certificates-dialog.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class CertificatesDialogComponent {
  displayedColumns: string[] = [
    'type',
    'issueDate',
    'expiryDate',
    'description',
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { certificates: Certificate[] }
  ) {}
}
