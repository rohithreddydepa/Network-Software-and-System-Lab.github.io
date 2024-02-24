import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TeamComponent } from "./team/team.component";
import { EquipmentComponent } from "./equipment/equipment.component";
import { PublicationsComponent } from "./publications/publications.component";
import { GrantsComponent } from "./grants/grants.component";
import { TeachingComponent } from "./teaching/teaching.component";
import { SeminarsComponent } from "./seminars/seminars.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "team",
    component: TeamComponent,
  },
  {
    path: "equipment",
    component: EquipmentComponent,
  },

  {
    path: "publications",
    component: PublicationsComponent,
  },

  {
    path: "grants",
    component: GrantsComponent,
  },
  {
    path: "teaching",
    component: TeachingComponent,
  },
  {
    path: "seminars",
    component: SeminarsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
