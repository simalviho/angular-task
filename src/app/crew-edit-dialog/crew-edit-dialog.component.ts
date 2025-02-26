import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Crew } from '../models/crew.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-crew-edit-dialog',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
  ],
  templateUrl: './crew-edit-dialog.component.html',
})
export class CrewEditDialogComponent implements OnInit {
  crew: Partial<Crew> = {};

  nationalities = ['American', 'French', 'Portuguese'];
  titles = ['Captain', 'Engineer', 'Cooker', 'Mechanicer'];
  currencies = ['USD', 'EUR'];

  constructor(
    public dialogRef: MatDialogRef<CrewEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Crew
  ) {}

  ngOnInit() {
    this.crew = { ...this.data };
  }

  save() {
    this.dialogRef.close(this.crew);
  }

  close() {
    this.dialogRef.close();
  }
}
