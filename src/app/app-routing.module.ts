import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "posts",
    loadChildren: () => import("./posts/posts.module").then(m => m.PostsModule)
  },
  {
    path: "",
    redirectTo: "posts",
    pathMatch: "full"
  },
  {
    path: "**",
    loadChildren: () =>
      import("./not-found/not-found.module").then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
