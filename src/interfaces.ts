export type CaseStatus = 'Open' | 'Coded' | 'Ready';

export interface Case {
  id: number;
  patientName: string;
  status: CaseStatus;
  code: string;
  visitDetails: string;
}
