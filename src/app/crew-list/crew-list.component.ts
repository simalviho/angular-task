import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CrewService } from '../services/crew.service';
import { Crew, Certificate } from '../models/crew.model';
import { CertificatesDialogComponent } from '../certificates-dialog/certificates-dialog.component';
import { CrewAddDialogComponent } from '../crew-add-dialog/crew-add-dialog.component';

@Component({
  selector: 'app-crew-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './crew-list.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class CrewListComponent implements OnInit {
  crewList: Crew[] = [];

  displayedColumns: string[] = [
    'actions',
    'firstName',
    'lastName',
    'nationality',
    'title',
    'daysOnBoard',
    'dailyRate',
    'currency',
    'totalIncome',
    'certificates',
  ];

  constructor(private crewService: CrewService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.crewList = this.crewService.getCrewList();
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

  openAddCrewDialog() {
    const dialogRef = this.dialog.open(CrewAddDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.crewService.addCrew(result);
        this.crewList = [...this.crewService.getCrewList()];
      }
    });
  }

  get totalIncomeSum(): number {
    return this.crewList.reduce((sum, crew) => sum + crew.totalIncome, 0);
  }
}
