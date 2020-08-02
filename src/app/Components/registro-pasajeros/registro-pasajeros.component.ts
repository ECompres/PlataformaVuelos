import { Component, OnInit } from '@angular/core';
import { Pasajeros } from 'src/app/Models/pasajeros';
import { VuelosService } from 'src/app/Services/vuelos.service';
import { Vuelos } from 'src/app/Models/vuelos';

@Component({
  selector: 'app-registro-pasajeros',
  templateUrl: './registro-pasajeros.component.html',
  styleUrls: ['./registro-pasajeros.component.css']
})
export class RegistroPasajerosComponent implements OnInit {
  
  public pasajero: Pasajeros;
  public vuelos:Vuelos[];
  public vuelo:Vuelos;
  public idVuelo:number;
  constructor(
    private vuelosService:VuelosService
  ) { 
    this.pasajero = new Pasajeros("","","",0);
  }
  onSubmit(frm){
    console.log(this.pasajero);
    this.vuelo = this.vuelos.find(x => x.id == this.idVuelo);
    this.vuelosService.deleteVuelo(this.idVuelo);
    this.vuelo.pasajeros.push(this.pasajero);
    this.vuelosService.addVuelo(this.vuelo);
    this.pasajero.nombres = "";
    this.pasajero.apellidos = "";
    this.pasajero.email="";
    this.pasajero.edad=0;
  }
  ngOnInit(): void {
    this.vuelos = this.vuelosService.getVuelos();
    console.log(this.vuelos);
  }

}
