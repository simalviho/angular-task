import { Injectable } from '@angular/core';
import { Crew } from '../models/crew.model';

@Injectable({ providedIn: 'root' })
export class CrewService {
  private crewList: Crew[] = [
    {
      id: 1,
      firstName: 'Şimal',
      lastName: 'Sude',
      nationality: 'TR',
      title: 'ENGINEER',
      daysOnBoard: 10,
      dailyRate: 200,
      currency: 'USD',
      totalIncome: 2400,
      certificates: [
        { type: 'A', issueDate: '2023-01-01', expiryDate: '2025-01-01' },
      ],
    },
  ];

  getCrewList(): Crew[] {
    return this.crewList;
  }

  deleteCrew(id: number) {
    this.crewList = this.crewList.filter((crew) => crew.id !== id);
  }

  addCrew(crew: Crew) {
    const newCrew = {
      ...crew,
      id: this.crewList.length + 1,
      totalIncome: crew.daysOnBoard * crew.dailyRate,
      certificates: [],
    };

    this.crewList.push(newCrew);
  }
}
