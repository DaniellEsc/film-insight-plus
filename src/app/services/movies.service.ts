import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenreDto, Movie, MoviesDto } from '../types/movie';
import { map } from 'rxjs';
import { VideoDto } from '../types/video';
import { ImagesDto } from '../types/image';
import { CreditsDto } from '../types/credits';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private URL = "https://api.themoviedb.org/3";
  private key = "53baf00cc2cd8383805b31532e5bbc0e";

  constructor(private http: HttpClient) { }

  getMoviesByType(type:string, count = 20) {
    return this.http.get<MoviesDto>(
      `${this.URL}/movie/${type}?api_key=${this.key}`
    ).pipe(map((data) => data.results.slice(0, count)));
  }

  getMovieById(id:string) {
    return this.http.get<Movie>(
      `${this.URL}/movie/${id}?api_key=${this.key}`
    );
  }

  getMovieVideos(id:string){
    return this.http.get<VideoDto>(
      `${this.URL}/movie/${id}/videos?api_key=${this.key}`)
      .pipe(map((data) => data.results));
  }

  getMovieImages(id:string){
    return this.http.get<ImagesDto>(
      `${this.URL}/movie/${id}/images?api_key=${this.key}`)
      .pipe(map((data) => data.backdrops));
  }

  getMovieCast(id:string){
    return this.http.get<CreditsDto>(
      `${this.URL}/movie/${id}/credits?api_key=${this.key}`)
      .pipe(map((data) => data.cast));
  }

  getMovieSimilars(id:string){
    return this.http.get<MoviesDto>(
      `${this.URL}/movie/${id}/similar?api_key=${this.key}`
    ).pipe(map((data) => data.results.slice(0,6)));
  }

  searchMovies(page:number, searchValue?: string){
    const uri = searchValue ? 'search/movie' : 'movie/popular';
    return this.http.get<MoviesDto>(
      `${this.URL}/${uri}?query=${searchValue}&page=${page}&api_key=${this.key}`
    );
  }

  getMovieGenres() {
    return this.http.get<GenreDto>(`${this.URL}/genre/movie/list?api_key=${this.key}`)
    .pipe(map((data) => data.genres));
  }

  getMoviesByGenre(genreId: string, pageNumber = 1) {
    return this.http
      .get<MoviesDto>(
        `${this.URL}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.key}`
      )
      .pipe(
        map((data) => {
          return data.results;
        })
      );
  }

}
