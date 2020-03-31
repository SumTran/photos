import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, pipe } from "rxjs";
import { map, retryWhen, takeWhile } from "rxjs/operators";
import { PhotoPage } from "../../libs/common/src";
import { Quote } from "./posts.component";

@Injectable({
  providedIn: "root"
})
export class DictionaryService {
  constructor(private http: HttpClient) {}

  fetchRandomQuote(): Observable<Quote> {
    return this.http
      .get<Quote>("https://api.quotable.io/random")
      .pipe(
        map(data => {
          if (data["length"] > 100) {
            throw "too long";
          }
          return data;
        })
      )
      .pipe(
        retryWhen(errors =>
          errors.pipe(takeWhile(error => error === "too long"))
        )
      );
  }

  fetchPhotos(query?: string, page = 1): Observable<PhotoPage> {
    console.log(query, page);
    const params = new HttpParams()
      .set("query", query)
      .set("per_page", "10")
      .set("page", String(page));
    const headers = new HttpHeaders().set(
      "Authorization",
      "563492ad6f91700001000001d5dc7360ab1d4ddc9b20fdf0eb92a18f"
    ).set('Access-Control-Allow-Origin', '*');
    if (query) {
      return this.searchPhotos(params, headers);
    }
    return this.fetchCuratedPhotos(params, headers);
  }

  searchPhotos(params, headers) {
    return this.http
      .get<PhotoPage>("https://api.pexels.com/v1/search", {
        params: params,
        headers: headers
      })
      .pipe(map(res => new PhotoPage(res)));
  }

  fetchCuratedPhotos(params, headers) {
    return this.http
      .get<PhotoPage>("https://api.pexels.com/v1/curated", {
        params: params,
        headers: headers
      })
      .pipe(map(res => new PhotoPage(res)));
  }

  fetchNextPage(string) {
    // debugger
    const headers = new HttpHeaders().set(
      "Authorization",
      "563492ad6f91700001000001d5dc7360ab1d4ddc9b20fdf0eb92a18f"
    );
    return this.http
      .get(string, { headers: headers })
      .pipe(map(res => new PhotoPage(res)));
  }

  fetchPopularVideos() {
    const headers = new HttpHeaders().set(
      "Authorization",
      "563492ad6f91700001000001d5dc7360ab1d4ddc9b20fdf0eb92a18f"
    );
    return this.http.get("https://api.pexels.com/videos/popular", {
      headers: headers
    });
  }
}
