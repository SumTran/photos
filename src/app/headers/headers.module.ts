import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HeadersComponent} from "./headers.component";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";


@NgModule({
  declarations: [
    HeadersComponent
  ],
    imports: [
        CommonModule,
        MatToolbarModule,
        RouterModule,
        MatIconModule,
        FlexLayoutModule,
        MatButtonModule,
        MatProgressBarModule
    ],
  exports:[
    HeadersComponent
  ]
})
export class HeadersModule { }
