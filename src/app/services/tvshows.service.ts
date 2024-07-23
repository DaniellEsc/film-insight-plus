import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tvshow, TvshowDto } from '../types/tvshow';
import { map } from 'rxjs';
import { VideoDto } from '../types/video';
import { CreditsDto } from '../types/credits';
import { ImagesDto } from '../types/image';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {

  constructor(private http: HttpClient) { }

  private URL = "https://api.themoviedb.org/3/";
  private key = "53baf00cc2cd8383805b31532e5bbc0e";

  getTvShowsByType(type: string, count = 20) {
    return this.http.get<TvshowDto>(
      `${this.URL}/tv/${type}?api_key=${this.key}`
    ).pipe(map((data) => data.results.slice(0, count)));
  }

  getTvShowById(id: string) {
    return this.http.get<Tvshow>(
      `${this.URL}/tv/${id}?api_key=${this.key}`
    );
  }

  getTvShowVideos(id: string) {
    return this.http
      .get<VideoDto>(`${this.URL}/tv/${id}/videos?api_key=${this.key}`)
      .pipe(map((data) => data.results));
  }

  getTvShowImages(id: string) {
    return this.http
      .get<ImagesDto>(`${this.URL}/tv/${id}/images?api_key=${this.key}`)
      .pipe(map((data) => data.backdrops));
  }

  getTvShowCast(id: string) {
    return this.http
      .get<CreditsDto>(`${this.URL}/tv/${id}/credits?api_key=${this.key}`)
      .pipe(map((data) => data.cast));
  }

  getTvShowSimilar(id: string) {
    return this.http
      .get<TvshowDto>(`${this.URL}/tv/${id}/similar?api_key=${this.key}`)
      .pipe(map((data) => data.results.slice(0, 12)));
  }

  searchTvShows(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/tv' : '/tv/popular';
    return this.http.get<TvshowDto>(
      `${this.URL}${uri}?page=${page}&query=${searchValue}&api_key=${this.key}`
    );
  }

}
