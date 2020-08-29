import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  @Input() md: string;
  @Input() type: string;

  constructor() {}

  ngOnInit() {}

  onRender(e) {
    //turn title into link to post page
    let title = document.getElementById(this.md);
    let link = document.createElement("a");
    link.href = `/#/post/${this.md}`;
    link.innerHTML = title.childNodes[0].nodeValue;
    title.after(link);
  }
}
