import { PostService } from "./../services/post.service";
import { Component, OnInit } from "@angular/core";
import { Post } from "../Post";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  posts: Post[];

  constructor(public postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
}
