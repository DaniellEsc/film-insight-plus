import { trigger, style, state, transition, animate } from '@angular/animations'
import { Component, Input } from '@angular/core';
import { imagesBaseUrl } from 'src/app/constants/images-sizes';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger("slideFade", [
      state("void", style({ opacity: 0 })),
      transition("void <=> *", [animate('1s')]),
    ])
  ]
})
export class SliderComponent {

  @Input() slides: Movie[] = [];
  @Input() isHeader = false;


  constructor() {

  }


  slideIndex = 0;

  imageBaseUrl = imagesBaseUrl;

  ngOnInit(): void {
    if (!this.isHeader) {
      this.changeSlide();

    }
  }

  changeSlide() {
    setInterval(() => {
      this.slideIndex += 1;
      if (this.slideIndex > 10) {
        this.slideIndex = 0;

      }
    }, 5000)
  }
}
