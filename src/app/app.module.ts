import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarruselComponent } from './app/carrusel/carrusel.component';
import { BarraSuperiorComponent } from './app/barra-superior/barra-superior.component';
import { CarruselMasVistasComponent } from './app/carrusel-mas-vistas/carrusel-mas-vistas.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    BarraSuperiorComponent,
    CarruselMasVistasComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

