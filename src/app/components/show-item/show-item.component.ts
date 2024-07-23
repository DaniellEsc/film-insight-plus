import { Component, Input } from '@angular/core';
import { imagesBaseUrl } from 'src/app/constants/images-sizes';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css']
})
export class ShowItemComponent {

  @Input() showItem : Movie | null = null;
  @Input() showType : 'tv' | 'movie' = 'movie';
  imageBaseUrl = imagesBaseUrl

}
