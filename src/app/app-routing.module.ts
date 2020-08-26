import { PostComponent } from "./post/post.component";
import { BlogComponent } from "./blog/blog.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { IndexComponent } from "./index/index.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjectsComponent } from "./projects/projects.component";
import { PostPageComponent } from "./post-page/post-page.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: IndexComponent },
  { path: "about", pathMatch: "full", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "blog", component: BlogComponent },
  { path: "post/:md", component: PostPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
