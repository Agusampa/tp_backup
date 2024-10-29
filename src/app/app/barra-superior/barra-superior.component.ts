import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrl: './barra-superior.component.css'
})
export class BarraSuperiorComponent {
  constructor(private http: HttpClient) {}
}
