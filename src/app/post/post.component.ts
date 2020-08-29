import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  @Input() md: string;
  @Input() type: string;
  @Input() titleLink: boolean = false;
  title: string = null;

  constructor() {}

  ngOnInit() {}

  onRender(e) {
    if (this.titleLink) {
      let title = document.getElementById(this.md).firstChild;
      this.title = title.textContent;
      title.remove();
    }
  }
}
