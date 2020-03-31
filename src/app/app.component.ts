import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "useful";
  constructor(
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry
  ) {}

  ngOnInit() {
    this.registerSvgIcons();
  }

  registerSvgIcons() {
    this.iconRegistry.addSvgIcon(
      "search",
      this.sanitizer.bypassSecurityTrustResourceUrl("./assets/search.svg")
    );
    this.iconRegistry.addSvgIcon(
      "photo",
      this.sanitizer.bypassSecurityTrustResourceUrl("./assets/picture.svg")
    );
    this.iconRegistry.addSvgIcon(
      "close",
      this.sanitizer.bypassSecurityTrustResourceUrl("./assets/close.svg")
    );
  }
}
