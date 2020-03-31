import { Component, OnInit } from "@angular/core";
import { WeatherService } from "./weather.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"]
})
export class WeatherComponent implements OnInit {
  testUrl: string;
  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(code => {
      if (code && Object.keys(code).length > 0) {
        this.weatherService.getAccessToken(code).subscribe(token => {
          console.log(token);
          localStorage.setItem("accessToken", JSON.stringify(token));
          this.weatherService.getCollections().subscribe(rs => {
            this.testUrl = rs[0]["urls"]["medium"];
          });
        });
        return;
      }
      const url = this.weatherService.authorize();
      location.assign(url);
    });
  }
}
