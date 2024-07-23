import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { TvshowsService } from 'src/app/services/tvshows.service';
import { MoviesDto } from 'src/app/types/movie';
import { mapToMoviesDto } from 'src/app/types/tvshow';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent {


  showList$: Observable<MoviesDto> | null = null;
  searchValue = ''
  showsType : 'movie' | 'tv' = 'movie';

  constructor(private movieService: MoviesService, private tvShowsService: TvshowsService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.showsType = params['type'];
      this.getPagesShows(this.showsType, 1);
    });

  }

  getPagesShows(
    showsType: 'movie' | 'tv',
    page: number,
    searchKeyword?: string
  ) {
    if (showsType === 'movie') {
      this.showList$ = this.movieService.searchMovies(page, searchKeyword);
    }
    if (showsType === 'tv') {
      this.showList$ = this.tvShowsService
        .searchTvShows(page, searchKeyword)
        .pipe(map(mapToMoviesDto));
    }
  }

  searchChange(){
    this.getPagesShows(this.showsType,1, this.searchValue)
  }

  pageChange(event:any) {
    console.log(event)
  }

}
