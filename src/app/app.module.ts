import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeadersModule } from "./headers/headers.module";
import { PostsModule } from "./posts/posts.module";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { WeatherModule } from "./weather/weather.module";
import {MatProgressButtonsModule} from "mat-progress-buttons";
import {SharedUiToastModule} from "../libs/ui/toast/src";

const routes: Routes = [
  {
    path: "photos",
    loadChildren: () => import("./posts/posts.module").then(m => m.PostsModule)
  },
  {
    path: "",
    redirectTo: "photos",
    pathMatch: "full"
  },
  {
    path: "unsplash",
    loadChildren: () =>
      import("./weather/weather.module").then(m => m.WeatherModule)
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeadersModule,
    PostsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    WeatherModule,
    MatProgressButtonsModule.forRoot(),
    SharedUiToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
