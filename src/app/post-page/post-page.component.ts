import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-post-page",
  templateUrl: "./post-page.component.html",
  styleUrls: ["./post-page.component.scss"],
})
export class PostPageComponent implements OnInit {
  postLoaded: boolean = false;
  md: string;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.md = this.route.snapshot.paramMap.get("md");
    this.postLoaded = true;
  }
}
