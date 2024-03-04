import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  constructor(public router: Router) {}
  menuItems = [
    { name: "Home", link: "/" },
    { name: "Team", link: "/team" },
    { name: "Equipment", link: "/equipment" },
    { name: "Research & Publications", link: "/publications" },
    { name: "Grants", link: "/grants" },
    { name: "Teaching", link: "/teaching" },
    { name: "Seminars and talks", link: "/seminars" },
  ];
  closeDropdown() {
    let element: HTMLElement = document.querySelector(
      ".navbar-toggler",
    ) as HTMLElement;
    if (element.getAttribute("aria-expanded") === "true") {
      element.click();
    }
  }
}
