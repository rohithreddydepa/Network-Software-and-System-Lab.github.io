import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TeamComponent } from "./team/team.component";
import { EquipmentComponent } from "./equipment/equipment.component";

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
