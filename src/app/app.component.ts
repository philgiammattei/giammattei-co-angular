import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = "Phil Giammattei";
  hamburgerShow: boolean = false;

  toggle() {
    this.hamburgerShow = !this.hamburgerShow;
  }
}
