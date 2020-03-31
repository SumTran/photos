import { Component, OnInit } from "@angular/core";
import { DictionaryService } from "./dictionary.service";
import { finalize } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";
import { PostDetailsComponent } from "./post-details/post-details.component";
import { LoadingSpinnerSerivce } from "../../libs/ui/loading-spinner/src";
import { PhotoDetails, PhotoPage } from "../../libs/common/src";
import { forkJoin } from "rxjs";
import { ToastService } from "../../libs/ui/toast/src";
import { KeyValue } from "@angular/common";

export interface Quote {
  _id: string;
  tags: string[];
  content: string;
  author: string;
  length: number;
}

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  readonly chipOptions: KeyValue<string, string>[] = [
    { key: "baby", value: "Baby" },
    { key: "girl", value: "Girl" },
    { key: "love", value: "Love" },
    { key: "family", value: "Family" }
  ];
  quote: Quote;
  photoQuery: string;
  fetchingPhoto: boolean;
  page = 1;
  photoPage: PhotoPage = new PhotoPage();
  isDialogOpened: boolean;
  loadingMore = false;
  searchWith = "photo";

  constructor(
    private dictionaryService: DictionaryService,
    private dialog: MatDialog,
    private spinner: LoadingSpinnerSerivce,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.spinner.showSpinner();
    this.fetchingPhoto = true;
    const randomQuote = this.dictionaryService.fetchRandomQuote();
    const photoPage = this.dictionaryService.fetchPhotos();
    forkJoin([randomQuote, photoPage])
      .pipe(
        finalize(() => {
          this.spinner.hideSpinner();
          this.fetchingPhoto = false;
        })
      )
      .subscribe(([quote, photoPage]) => {
        this.photoPage = photoPage;
        this.quote = quote;
      });
  }

  searchPhoto() {
    if(!this.photoQuery) return;
    this.fetchingPhoto = true;

    this.dictionaryService
      .fetchPhotos(this.photoQuery, this.page)
      .pipe(
        finalize(() => {
          this.fetchingPhoto = false;
        })
      )
      .subscribe(
        page => {
          this.photoPage = page;
        },
        error => {}
      );
  }

  openImage(photoDetails: PhotoDetails) {
    this.isDialogOpened = true;
    this.dialog
      .open(PostDetailsComponent, {
        data: photoDetails,
        height: "99vh",
        width: "100vw"
      })
      .afterClosed()
      .subscribe(rs => (this.isDialogOpened = false));
  }

  searchBaby(key: string) {
    this.photoQuery = key;
    this.searchPhoto();
  }

  searchGirl() {
    this.photoQuery = "girl";
    this.searchPhoto();
  }

  // @HostListener("window:scroll", ["$event"])
  // onWindowScroll() {
  //   if (this.isDialogOpened) return;
  //   let pos =
  //     (document.documentElement.scrollTop || document.body.scrollTop) +
  //     document.documentElement.offsetHeight;
  //   let max = document.documentElement.scrollHeight;
  //   if (pos == max) {
  //     // this.spinner.showSpinner();
  //     this.loadingMore = true
  //     this.dictionaryService
  //       .fetchNextPage(this.photoPage.next_page)
  //       .pipe(finalize(() => this.loadingMore = false))
  //       .subscribe(resp => {
  //         this.photoPage.photos = this.photoPage.photos.concat(resp.photos);
  //         this.photoPage.next_page = resp.next_page;
  //       });
  //   }
  // }
  isFocusInput: boolean;
  loadMore() {
    this.loadingMore = true;
    this.dictionaryService
      .fetchNextPage(this.photoPage.next_page)
      .pipe(finalize(() => (this.loadingMore = false)))
      .subscribe(resp => {
        this.photoPage.photos = this.photoPage.photos.concat(resp.photos);
        this.photoPage.next_page = resp.next_page;
      });
  }
  

  focusInput($event: FocusEvent) {
    console.log($event);
    this.isFocusInput = true;
  }

  blur($event: FocusEvent) {
    if(!this.photoQuery) this.isFocusInput = false;
  }

  resetQuery() {
    this.photoQuery = '';
  }
}
