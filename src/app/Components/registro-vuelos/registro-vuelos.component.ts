import { Component, OnInit } from '@angular/core';
import { PaisesServices } from 'src/app/Services/paises.service';
import { Paises } from 'src/app/Models/paises';
import { Vuelos } from 'src/app/Models/vuelos';
import { VuelosService } from 'src/app/Services/vuelos.service';

@Component({
  selector: 'app-registro-vuelos',
  templateUrl: './registro-vuelos.component.html',
  styleUrls: ['./registro-vuelos.component.css']
})
export class RegistroVuelosComponent implements OnInit {
  public paises: Paises;

  public vuelo: Vuelos;
  public vueloT: Array<any>;
  public vuelos: Vuelos[];

  constructor(private paisesService: PaisesServices, private vuelosService: VuelosService) {
    this.vuelo = new Vuelos(0, "", "", "","", []);
  }



  onSubmit(frm) {
    this.vuelo.id = this.vuelosService.vuelosArr.length + 1;

    this.vuelosService.addVuelo(this.vuelo);
    this.vuelo.id = 0;
    this.vuelo.pais = "";
    this.vuelo.fechaHora = "";
    this.vuelo.codigo= "";
    this.vuelo.tiempoVuelo = "";
  }

  getPaises() {
    return this.paisesService.getAllCountries().subscribe(
      (res) => {
        if (res)
          this.paises = res;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    this.getPaises();
    this.vuelos = this.vuelosService.getVuelos();
    console.log(this.vuelosService.vuelosArr.length);
  }

}
