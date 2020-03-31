import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherComponent } from "./weather.component";
import { RouterModule, Routes } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { FlexModule } from "@angular/flex-layout";
import {MatDividerModule} from "@angular/material/divider";
import {MatDialogModule} from "@angular/material/dialog";

const routes: Routes = [{ path: "", component: WeatherComponent }];

@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    FlexModule,
    MatDividerModule,
    MatDialogModule
  ]
})
export class WeatherModule {}
