import { Component } from "@angular/core";
import { Image } from "../interfaces";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  imageData: Image[] = [];
}
