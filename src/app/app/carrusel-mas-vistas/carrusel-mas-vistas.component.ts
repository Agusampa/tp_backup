import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carrusel-mas-vistas',
  templateUrl: './carrusel-mas-vistas.component.html',
  styleUrls: ['./carrusel-mas-vistas.component.css']
})
export class CarruselMasVistasComponent implements OnInit {
  popularMovies: any[] = [];
  currentSlideIndex: number = 0;
  maxVisibleMovies: number = 5; // Número de películas visibles a la vez

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadPopularMovies();
  }

  loadPopularMovies() {
    this.http
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=c130076811f0e957626523dba642db29&language=es-US&page=1'
      )
      .subscribe(
        (response: any) => {
          if (response && response.results) {
            this.popularMovies = response.results.slice(0, 10); // Obtener solo 10 películas
          }
        },
        (error) => {
          console.error('Error al obtener las películas populares:', error);
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
    const maxIndex = this.popularMovies.length - this.maxVisibleMovies; // Índice máximo
    if (this.currentSlideIndex < maxIndex) {
      this.currentSlideIndex++;
    }
    this.updateCarousel();
  }

  updateCarousel() {
    const movieList = document.querySelector('.movie-list') as HTMLElement;
    const movieWidth = 150 + 15; // Ancho de la película + margen
    movieList.style.transform = `translateX(-${this.currentSlideIndex * movieWidth}px)`;
  }

  isNextButtonDisabled(): boolean {
    return this.currentSlideIndex >= this.popularMovies.length - this.maxVisibleMovies;
  }
}
