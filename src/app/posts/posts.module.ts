import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PostsComponent } from "./posts.component";
import { PostDetailsComponent } from "./post-details/post-details.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressButtonsModule } from "mat-progress-buttons";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDividerModule} from "@angular/material/divider";
import {MatChipsModule} from "@angular/material/chips";

const routes: Routes = [
  {
    path: "photos",
    children: [
      { path: "", component: PostsComponent },
      {
        path: ":id",
        component: PostDetailsComponent
      }
    ]
  },
  { path: "", redirectTo: "photos", pathMatch: "full" }
];

@NgModule({
  declarations: [PostsComponent, PostDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressButtonsModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatTabsModule,
    MatDividerModule,
    MatChipsModule,
  ]
})
export class PostsModule {}
