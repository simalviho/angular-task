import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CrewService } from '../services/crew.service';
import { Crew } from '../models/crew.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-crew-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './crew-list.component.html',
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

  constructor(private crewService: CrewService) {}

  ngOnInit(): void {
    this.crewList = this.crewService.getCrewList();
  }

  deleteCrew(id: number) {
    this.crewService.deleteCrew(id);
    this.crewList = this.crewService.getCrewList();
  }
}
