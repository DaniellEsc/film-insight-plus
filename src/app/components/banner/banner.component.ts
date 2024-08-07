import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  @Input() shows: Movie[] = [];

  @Input() title = '';
  @Input() showsType: 'tv' | 'movie' = 'movie';

}
