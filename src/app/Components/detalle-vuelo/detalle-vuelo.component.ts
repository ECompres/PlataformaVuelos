import { Component, OnInit } from '@angular/core';
import { VuelosService } from 'src/app/Services/vuelos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vuelos } from 'src/app/Models/vuelos';
import { Pasajeros } from 'src/app/Models/pasajeros';

@Component({
  selector: 'app-detalle-vuelo',
  templateUrl: './detalle-vuelo.component.html',
  styleUrls: ['./detalle-vuelo.component.css']
})
export class DetalleVueloComponent implements OnInit {

  constructor(private vuelosService: VuelosService, private _route: ActivatedRoute, private route: Router) { }

  public idVuelo: number;
  public pasajeros:Pasajeros[];
  public vuelo: Vuelos;

  ngOnInit(): void {
    this._route.params.subscribe(
      (params) => {
        this.idVuelo = params.id;
        console.log(this.idVuelo);
      }
    )
    this.vuelo = this.vuelosService.getVuelos().find(x => x.id == this.idVuelo);
    this.pasajeros = this.vuelo.pasajeros;
    console.log(this.vuelo.pasajeros)
  }

}
