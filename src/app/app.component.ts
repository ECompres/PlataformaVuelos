import { Component } from '@angular/core';
import { PaisesServices } from './Services/paises.service';
import { Paises } from './Models/paises';
import { VuelosService } from './Services/vuelos.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PaisesServices]
})
export class AppComponent {
  title = 'PlataformaVuelos';



  public paises: any;

  constructor(private vuelosService: VuelosService) {

  }

  ngOnInit(): void {
    let vuelosArr = [
      {
        id: 1,
        pais: "Afganistan",
        fechaHora: "2020-01-01T01:01",
        tiempoVuelo: "3 horas",
        codigo: "3D3HGR",
        pasajeros: []
      },
      {
        id: 2,
        pais: "United States",
        fechaHora: "2020-01-01T01:01",
        tiempoVuelo: "3 horas",
        codigo: "4KFJ43",
        pasajeros: []
      }
    ]
    localStorage.setItem('vuelos', JSON.stringify(vuelosArr));



  }

}
