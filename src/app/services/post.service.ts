import { Injectable } from "@angular/core";
import { Posts, Post } from "../Post";

@Injectable({
  providedIn: "root",
})
export class PostService {
  posts: Post[] = Posts;

  constructor() {}

  getPosts() {
    return this.posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  getBlogPosts() {
    return this.posts
      .filter((post) => post.type === "blog")
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  getProjects() {
    return this.posts
      .filter((post) => post.type === "project")
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }
}
