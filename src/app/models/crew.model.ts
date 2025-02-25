export interface Certificate {
  type: string;
  issueDate: string;
  expiryDate: string;
  description: string;
}

export interface Crew {
  id: number;
  firstName: string;
  lastName: string;
  nationality: string;
  title: string;
  daysOnBoard: number;
  dailyRate: number;
  currency: 'USD' | 'EUR';
  totalIncome: number;
  certificates: Certificate[];
}
