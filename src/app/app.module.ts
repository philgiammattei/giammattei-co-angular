import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MarkdownModule } from "ngx-markdown";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./index/index.component";
import { PostComponent } from "./post/post.component";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";
import { BlogComponent } from "./blog/blog.component";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { PostPageComponent } from './post-page/post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PostComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    BlogComponent,
    PostPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
