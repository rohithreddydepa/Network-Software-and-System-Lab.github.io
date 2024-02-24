import { HttpClient } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { HardwareItem, RolesData } from "../../interfaces";
@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styleUrl: "./data.component.scss",
})
export class DataComponent {
  @Input() name: string = "";
  data: RolesData = {
    doctoralAdvisoryCommitteeRoles: [],
    phdStudents: [],
    masterThesisAdvisoryCommittee: [],
    masterStudents: [],
    undergraduateStudents: [],
  };

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.loadHardwareItems();
  }
  loadHardwareItems() {
    this.http
      .get<RolesData>("../../../assets/team_data.json")
      .subscribe((data: RolesData) => {
        this.data = data;
        console.log(this.data);
      });
  }
}
