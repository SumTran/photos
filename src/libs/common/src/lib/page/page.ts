import { Pageable } from "./pageable";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

export class Page<T> {
  content: T[] = [];
  page: number;
  perPage: number;
  totalCount: number;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  get numberOfPages(): number {
    return this.perPage > 0 ? Math.ceil(this.totalCount / this.perPage) : 0;
  }

  withContent(contents: T[]) {
    this.content = contents;
    return this;
  }

  withTotalCount(totalCount: number) {
    this.totalCount = totalCount;
    return this;
  }

  withPageable(pageable: Pageable): Page<T> {
    this.page = pageable.page;
    this.perPage = pageable.perPage;
    return this;
  }

  /**
   * This method can use when totalCount = 0 for streaming data from ms-data
   */
  canHasTheNextPage() {
    return (
      this.numberOfPages > this.page ||
      (this.totalCount === 0 &&
        this.perPage > 0 &&
        this.content.length === this.perPage)
    );
  }
}

export class PhotoPage {
  page: number;
  per_page: number;
  photos: PhotoDetails[] = [];
  next_page: string;

  constructor(obj?) {
    Object.assign(this, obj);
  }

}

export interface PhotoDetails {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  src: PhotoSizes;
  liked: boolean;
}

export interface PhotoSizes {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}
