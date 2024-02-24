import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { TeamComponent } from "./team/team.component";
import { HttpClientModule } from "@angular/common/http";
import { EquipmentComponent } from "./equipment/equipment.component";
import { PublicationsComponent } from "./publications/publications.component";
import { GrantsComponent } from "./grants/grants.component";
import { TeachingComponent } from "./teaching/teaching.component";
import { SeminarsComponent } from "./seminars/seminars.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TeamComponent,
    EquipmentComponent,
    PublicationsComponent,
    GrantsComponent,
    TeachingComponent,
    SeminarsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
