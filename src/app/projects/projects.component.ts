import { PostService } from "./../services/post.service";
import { Component, OnInit } from "@angular/core";
import { Post } from "../Post";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  projects: Post[];

  constructor(public postService: PostService) {}

  ngOnInit() {
    this.projects = this.postService.getProjects();
  }
}
