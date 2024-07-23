import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './pages/home/home.component';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { MoviesService } from './services/movies.service';
import { ShowItemComponent } from './components/show-item/show-item.component';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import { ShowsListComponent } from './pages/shows-list/shows-list.component';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { GenresComponent } from './pages/genres/genres.component';
// import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SliderComponent,
    HomeComponent,
    ShowDetailComponent,
    HeaderComponent,
    FooterComponent,
    ShowItemComponent,
    VideoEmbedComponent,
    ShowsListComponent,
    GenresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    InputTextModule,
    FormsModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
