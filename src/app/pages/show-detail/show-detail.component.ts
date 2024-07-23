import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { MoviesService } from 'src/app/services/movies.service';
import { TvshowsService } from 'src/app/services/tvshows.service';
import { Actor } from 'src/app/types/credits';
import { Image } from 'src/app/types/image';
import { Movie } from 'src/app/types/movie';
import { mapToMovie } from 'src/app/types/tvshow';
import { Video } from 'src/app/types/video';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {

  imagesSizes = IMAGES_SIZES;

  showId = '';
  showType$: 'tv' |  'movie' = 'movie';

  show$: Observable<Movie> | null = null;
  showVideos$: Observable<Video[]> | null = null;
  showImages$: Observable<Image[]> | null = null;
  showCast$: Observable<Actor[]> | null = null;
  showSimilarMovies$: Observable<Movie[]> | null = null;


  constructor(private router: ActivatedRoute, private movieService: MoviesService, private tvshowsService: TvshowsService) { }




  ngOnInit(): void {
    // this.router.params.subscribe(params => {
    //   this.showId = params['id']
    // })
    this.showId = this.router.snapshot.params['id'];
    this.showType$ = this.router.snapshot.params['type'];

    if (this.showType$ === 'movie') {

      this.show$ = this.movieService.getMovieById(this.showId);
      this.showVideos$ = this.movieService.getMovieVideos(this.showId);
      this.showImages$ = this.movieService.getMovieImages(this.showId);
      this.showCast$ = this.movieService.getMovieCast(this.showId);
      this.showSimilarMovies$ = this.movieService.getMovieSimilars(this.showId);
    }

    if (this.showType$ === 'tv') {

      this.show$ = this.tvshowsService.getTvShowById(this.showId).pipe(map(mapToMovie));


    }

  }


}
