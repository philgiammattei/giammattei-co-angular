import { PostService } from "./../services/post.service";
import { Component, OnInit } from "@angular/core";
import { Post } from "../Post";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  blogPosts: Post[];

  constructor(public postService: PostService) {}

  ngOnInit() {
    this.blogPosts = this.postService.getBlogPosts();
  }
}
