import { Component, OnInit } from '@angular/core';
import { VuelosService } from 'src/app/Services/vuelos.service';
import { Vuelos } from 'src/app/Models/vuelos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-vuelos',
  templateUrl: './listar-vuelos.component.html',
  styleUrls: ['./listar-vuelos.component.css']
})
export class ListarVuelosComponent implements OnInit {

  constructor(private vuelosService: VuelosService, private route: Router) { }
  public vuelos: Vuelos[];

  deleteVuelo(id) {
    for (let i = 0; i < this.vuelos.length; i++) {
      if (this.vuelos[i].id == id)
        this.vuelos.splice(i, 1);
    }
    this.vuelosService.deleteVuelo(id);
    this.route.navigateByUrl('/listarVuelos', { skipLocationChange: true })
      .then(() => this.route.navigate(['/listarVuelos']));
  };

  updateVuelo(id) {
    this.route.navigate(['/updateVuelo/', id])
  }

  ngOnInit(): void {
    this.vuelos = this.vuelosService.getVuelos();
    console.log(this.vuelos);
  }

}
