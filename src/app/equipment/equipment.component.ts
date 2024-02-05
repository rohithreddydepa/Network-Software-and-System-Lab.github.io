import { Component } from "@angular/core";
import { HardwareItem } from "../interfaces";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styleUrl: "./equipment.component.scss",
})
export class EquipmentComponent {
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
      });
  }
}
