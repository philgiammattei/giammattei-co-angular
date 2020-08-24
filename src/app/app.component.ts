import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Phil Giammattei";
  hamburgerShow: boolean = false;

  toggle() {
    this.hamburgerShow = !this.hamburgerShow;
  }
}
