import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { KeyValue } from "@angular/common";

@Component({
  selector: "app-headers",
  templateUrl: "./headers.component.html",
  styleUrls: ["./headers.component.scss"]
})
export class HeadersComponent implements OnInit {
  readonly links: KeyValue<string, string>[] = [
    { key: "photos", value: "Photos" },
    // { key: "unsplash", value: "Unsplash" }
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
