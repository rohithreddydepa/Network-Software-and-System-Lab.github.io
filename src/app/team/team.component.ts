import { Component } from "@angular/core";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrl: "./team.component.scss",
})
export class TeamComponent {
  Student_level: any[] = [
    "Doctoral Advisory Committee",
    "Ph.D. students",
    "Master Thesis Advisory Committee",
    "Master students",
    "Undergraduate students",
  ];
  active_block: string = "Doctoral Advisory Committee";
  choose(block: string) {
    this.active_block = block;
  }
}
