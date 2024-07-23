import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.css']
})
export class VideoEmbedComponent {

  @Input() key: string | null = null;

  videoUrl: SafeResourceUrl = "";

  constructor(private sanitizer: DomSanitizer){}


  ngOnInit(): void {
   this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.youtube.com/embed/' +this.key)
  }

}
