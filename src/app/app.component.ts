import { Component } from '@angular/core';
import { PaisesServices } from './Services/paises.service';
import { Paises } from './Models/paises';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PaisesServices]
})
export class AppComponent {
  title = 'PlataformaVuelos';

  

  public paises: any;

  constructor(private paisesService: PaisesServices) {

  }
  
  ngOnInit(): void {
    // this.getPaises();

  }

}
