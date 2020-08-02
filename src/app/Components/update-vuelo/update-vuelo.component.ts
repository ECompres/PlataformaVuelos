import { Component, OnInit, ViewChild } from '@angular/core';
import { VuelosService } from 'src/app/Services/vuelos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vuelos } from 'src/app/Models/vuelos';
import { PaisesServices } from 'src/app/Services/paises.service';
import { Paises } from 'src/app/Models/paises';

@Component({
  selector: 'app-update-vuelo',
  templateUrl: './update-vuelo.component.html',
  styleUrls: ['./update-vuelo.component.css']
})
export class UpdateVueloComponent implements OnInit {

  constructor(
    private paisesService: PaisesServices,
    private vuelosService: VuelosService,
    private _route: ActivatedRoute,
    private route: Router
  ) { }
  public paises: Paises[];
  public id: number;
  public vuelo: Vuelos;
  public vuelos: Vuelos[];

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
  @ViewChild("formVuelo", { static: true }) formVuelo: any;
  onSubmit(frm) {
    if (this.formVuelo.value)
      this.vuelosService.deleteVuelo(this.id);
    this.vuelosService.addVuelo(this.vuelo);
    this.route.navigate(['/listarVuelos']);
    this.vuelo.id = 0;
    this.vuelo.pais = "";
    this.vuelo.fechaHora = "";
    this.vuelo.tiempoVuelo = "";
  }

  ngOnInit(): void {
    this.getPaises();
    this._route.params.subscribe(
      (params) => {
        this.id = params.id;
        console.log(this.id);
      }
    );
    this.vuelos = this.vuelosService.getVuelos();
    this.vuelo = this.vuelos.find(x => x.id == this.id);
    console.log(this.vuelo);
  }

}
