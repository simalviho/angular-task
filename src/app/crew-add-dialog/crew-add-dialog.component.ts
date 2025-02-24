import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Crew } from '../models/crew.model';
import { CommonModule } from '@angular/common';

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
  ],
  templateUrl: './crew-add-dialog.component.html',
})
export class CrewAddDialogComponent {
  crew: Partial<Crew> = {};

  nationalities = ['American', 'French', 'Portuguese'];
  titles = ['Captain', 'Engineer', 'Cooker', 'Mechanicer'];
  currencies = ['USD', 'EUR'];

  constructor(public dialogRef: MatDialogRef<CrewAddDialogComponent>) {}

  save() {
    this.dialogRef.close(this.crew);
  }

  close() {
    this.dialogRef.close();
  }
}
