import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Seminars } from "../interfaces";

@Component({
  selector: "app-seminars",
  templateUrl: "./seminars.component.html",
  styleUrl: "./seminars.component.scss",
})
export class SeminarsComponent {
  seminars: Seminars[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.loadHardwareItems();
  }
  loadHardwareItems() {
    this.http
      .get<Seminars[]>("../../assets/seminar_data.json")
      .subscribe((data: Seminars[]) => {
        this.seminars = data;
        this.seminars.sort(this.sortByDate);
      });
  }
  parseDate(dateStr: string): Date {
    const [month, year] = dateStr.split(" ");
    const monthNumber = new Date(`${month} 1`).getMonth();
    return new Date(Number(year), monthNumber);
  }
  sortByDate(a: any, b: any): number {
    const dateA = this.parseDate(a.Date);
    const dateB = this.parseDate(b.Date);
    return dateA.getTime() - dateB.getTime();
  }
}
