export interface HardwareItem {
  item: string;
  quantity: number;
}

export interface Talk {
  Title: string;
  Host: string;
  Date: string;
}

export interface Seminars {
  Invited_Talks_and_Seminars: Talk[];
  Group_Seminars_and_Research_Talks: Talk[];
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
export interface Image {
  src: string;
  label: string;
  text: string;
}
