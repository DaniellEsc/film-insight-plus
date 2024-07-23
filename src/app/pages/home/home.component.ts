import { Component } from '@angular/core';
import { map } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { TvshowsService } from 'src/app/services/tvshows.service';
import { mapToMovies } from 'src/app/types/tvshow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  popularMovies$ = this.moviesService.getMoviesByType('popular', 12);
  upcomingMovies$ = this.moviesService.getMoviesByType('upcoming', 12);
  topRatedMovies$ = this.moviesService.getMoviesByType('top-rated', 12);
  popularTvshows$ = this.tvshowsService.getTvShowsByType('popular', 12)
    .pipe(map(mapToMovies)
    );


  constructor(private moviesService: MoviesService, private tvshowsService: TvshowsService) { }

}
