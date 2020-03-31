import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.scss"]
})
export class PostDetailsComponent implements OnInit {
  src: string;
  loading = true;
  d: any;
  initHeight: number;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.src = data["src"]["original"];
    this.initHeight = this.data.height;
  }

  ngOnInit() {}
  onImageLoad() {
    console.log(this.d);
    console.log(this.data.height);
    if (this.data.height == this.initHeight) {
      console.log("loaded");
      this.loading = false;
    }
  }
}
