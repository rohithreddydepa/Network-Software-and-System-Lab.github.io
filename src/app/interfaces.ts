// src/app/interfaces.ts

export interface HardwareItem {
  item: string;
  quantity: number;
}
interface DoctoralAdvisoryCommitteeRole {
  studentName: string;
  advisor: string;
  department: string;
  university: string;
  years: number[];
}

interface student {
  name: string;
  role: string;
  years: number[];
}

interface MasterThesisAdvisoryCommittee {
  studentName: string;
  advisor: string;
  department: string;
  university: string;
  years: number[];
}

export interface RolesData {
  doctoralAdvisoryCommitteeRoles: DoctoralAdvisoryCommitteeRole[];
  phdStudents: student[];
  masterThesisAdvisoryCommittee: MasterThesisAdvisoryCommittee[];
  masterStudents: student[];
  undergraduateStudents: student[];
}
