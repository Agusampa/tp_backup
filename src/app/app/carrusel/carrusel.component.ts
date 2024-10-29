import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  topRatedMovies: any[] = [];
  currentSlideIndex: number = 0;
  maxVisibleMovies: number = 5; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadTopRatedMovies();
  }

  loadTopRatedMovies() {
    this.http
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=c130076811f0e957626523dba642db29&language=es-US&page=1'
      )
      .subscribe(
        (response: any) => {
          if (response && response.results) {
            this.topRatedMovies = response.results.slice(0, 10); 
          }
        },
        (error) => {
          console.error('Error al obtener las películas:', error);
        }
      );
  }

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
    this.updateCarousel();
  }

  nextSlide() {
    const maxIndex = this.topRatedMovies.length - this.maxVisibleMovies;
    if (this.currentSlideIndex < maxIndex) {
      this.currentSlideIndex++;
    }
    this.updateCarousel();
  }

  updateCarousel() {
    const movieList = document.querySelector('.movie-list') as HTMLElement;
    const movieWidth = 150 + 15; 
    movieList.style.transform = `translateX(-${this.currentSlideIndex * movieWidth}px)`;
  }

  isNextButtonDisabled(): boolean {
    return this.currentSlideIndex >= this.topRatedMovies.length - this.maxVisibleMovies;
  }
}

