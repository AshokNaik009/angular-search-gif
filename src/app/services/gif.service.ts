import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class gifService {
  constructor(public http: HttpClient) {}

  //To-do: Add Dummy Api key Before Pushing the Code 
  apiKey = 'testetsetste';

  getTrendingGifs() {
    return this.http
      .get<any>(
        `https://api.giphy.com/v1/gifs/trending?api_key=${this.apiKey}&limit=25&rating=g`
      )
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  searchGifs(query: string) {
    return this.http
      .get<any>(
        `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=t${query}&limit=25&offset=0&rating=g&lang=en`
      )
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
