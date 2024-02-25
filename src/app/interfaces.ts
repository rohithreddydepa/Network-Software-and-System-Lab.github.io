export interface HardwareItem {
  item: string;
  quantity: number;
}

export interface Seminars {
  Title: string;
  Host: string;
  Date: string;
  Talk: string;
}

interface BaseCommitteeRole {
  studentName: string;
  advisor: string;
  department: string;
  university: string;
  years: number[];
}
export interface Student {
  name: string;
  role: string;
  years: number[];
}
export interface RolesData {
  doctoralAdvisoryCommitteeRoles: BaseCommitteeRole[];
  phdStudents: Student[];
  masterThesisAdvisoryCommittee: BaseCommitteeRole[];
  masterStudents: Student[];
  undergraduateStudents: Student[];
}
