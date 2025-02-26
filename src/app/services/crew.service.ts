import { Injectable } from '@angular/core';
import { Crew } from '../models/crew.model';

@Injectable({ providedIn: 'root' })
export class CrewService {
  private crewList: Crew[] = [
    {
      id: 1,
      firstName: 'Şimal',
      lastName: 'Sude',
      nationality: 'American',
      title: 'Engineer',
      daysOnBoard: 10,
      dailyRate: 200,
      currency: 'EUR',
      totalIncome: 1400,
      certificates: [
        {
          type: 'A',
          issueDate: '2023-01-01',
          expiryDate: '2025-01-01',
          description: 'hellooo',
        },
      ],
    },
    {
      id: 1,
      firstName: 'Banu',
      lastName: 'Sude',
      nationality: 'French',
      title: 'Cooker',
      daysOnBoard: 10,
      dailyRate: 200,
      currency: 'USD',
      totalIncome: 8400,
      certificates: [
        {
          type: 'A',
          issueDate: '2023-01-01',
          expiryDate: '2025-01-01',
          description: 'hellooo',
        },
      ],
    },
    {
      id: 1,
      firstName: 'Metin',
      lastName: 'Gök',
      nationality: 'American',
      title: 'Mechanicer',
      daysOnBoard: 10,
      dailyRate: 200,
      currency: 'EUR',
      totalIncome: 1200,
      certificates: [
        {
          type: 'A',
          issueDate: '2023-01-01',
          expiryDate: '2025-01-01',
          description: 'hellooo',
        },
      ],
    },
    {
      id: 1,
      firstName: 'Ali',
      lastName: 'Veli',
      nationality: 'Portuguese',
      title: 'Captain',
      daysOnBoard: 10,
      dailyRate: 200,
      currency: 'USD',
      totalIncome: 9800,
      certificates: [
        {
          type: 'A',
          issueDate: '2023-01-01',
          expiryDate: '2025-01-01',
          description: 'hellooo',
        },
      ],
    },
    {
      id: 1,
      firstName: 'Ayşe',
      lastName: 'Demir',
      nationality: 'American',
      title: 'Mechanicer',
      daysOnBoard: 10,
      dailyRate: 200,
      currency: 'USD',
      totalIncome: 3400,
      certificates: [
        {
          type: 'A',
          issueDate: '2023-01-01',
          expiryDate: '2025-01-01',
          description: 'hellooo',
        },
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
      certificates: crew.certificates || [],
    };

    this.crewList.push(newCrew);
  }

  getCrewById(id: number): Crew | undefined {
    const crew = this.crewList.find((crew) => crew.id === id);
    console.log('data:', crew);
    return this.crewList.find((crew) => crew.id === id);
  }
}
