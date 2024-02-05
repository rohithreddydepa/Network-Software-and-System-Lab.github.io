import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { HardwareItem } from "../interfaces";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  hardwareItems: HardwareItem[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.loadHardwareItems();
  }

  loadHardwareItems() {
    this.http
      .get<HardwareItem[]>("../../assets/hardware_data.json")
      .subscribe((data) => {
        this.hardwareItems = data.sort((a, b) => a.item.localeCompare(b.item));
        console.log(this.hardwareItems);

        // Now hardwareItems is sorted
      });
  }
}
