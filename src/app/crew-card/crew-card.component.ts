import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { CrewService } from '../services/crew.service';
import { Crew } from '../models/crew.model';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-crew-card',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    TranslateModule,
  ],
  templateUrl: './crew-card.component.html',
})
export class CrewCardComponent implements OnInit {
  crew: Crew = {} as Crew;
  displayedColumns: string[] = [
    'type',
    'issueDate',
    'expiryDate',
    'description',
  ];

  constructor(
    private route: ActivatedRoute,
    private crewService: CrewService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.crew = this.crewService.getCrewById(id) || ({} as Crew);

    this.crew.certificates = this.crew.certificates ?? [];
  }
}
