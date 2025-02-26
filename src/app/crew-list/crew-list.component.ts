import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CrewService } from '../services/crew.service';
import { Crew, Certificate } from '../models/crew.model';
import { CertificatesDialogComponent } from '../certificates-dialog/certificates-dialog.component';
import { CrewAddDialogComponent } from '../crew-add-dialog/crew-add-dialog.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrewEditDialogComponent } from '../crew-edit-dialog/crew-edit-dialog.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-crew-list',
  standalone: true,
  imports: [
    TranslateModule,
    FormsModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
  templateUrl: './crew-list.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class CrewListComponent implements OnInit {
  crewList: Crew[] = [];

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'nationality',
    'title',
    'daysOnBoard',
    'dailyRate',
    'currency',
    'discount',
    'totalIncome',
    'certificates',
    'actions',
  ];

  discountValues: { [id: number]: number } = {};

  constructor(
    private crewService: CrewService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.crewList = this.crewService.getCrewList();
    this.crewList.forEach((crew) => {
      this.discountValues[crew.id] = 0;
    });
    console.log('DATA:', this.crewList);
  }

  deleteCrew(id: number) {
    this.crewService.deleteCrew(id);
    this.crewList = this.crewService.getCrewList();
  }
  showCertificates(certificates: Certificate[]) {
    this.dialog.open(CertificatesDialogComponent, {
      data: { certificates },
    });
  }
  getDiscountedIncome(crew: Crew): number {
    return crew.totalIncome - (this.discountValues[crew.id] || 0);
  }

  getTotalIncome(): number {
    return this.crewList.reduce(
      (total, crew) => total + this.getDiscountedIncome(crew),
      0
    );
  }

  openAddCrewDialog() {
    const dialogRef = this.dialog.open(CrewAddDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.crewService.addCrew(result);
        this.crewList = [...this.crewService.getCrewList()];
      }
    });
  }

  openEditCrewDialog(crew: Crew) {
    const dialogRef = this.dialog.open(CrewEditDialogComponent, {
      data: crew,
    });

    dialogRef.afterClosed().subscribe((updatedCrew) => {
      if (updatedCrew) {
        const index = this.crewList.findIndex((c) => c.id === updatedCrew.id);
        if (index !== -1) {
          this.crewList[index] = updatedCrew;
        }
      }
    });
  }

  viewCrew(crewId: number) {
    this.router.navigate(['/crew-card', crewId]);
  }

  get totalIncomeSum(): number {
    return this.crewList.reduce((sum, crew) => sum + crew.totalIncome, 0);
  }
}
