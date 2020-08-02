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
    
  }

}
