
//Importaciones Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Importaciones Angular


//Componentes Angular
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './Components/shared/sidebar/sidebar.component';
import { RegistroVuelosComponent } from './Components/registro-vuelos/registro-vuelos.component';
import { RegistroPasajerosComponent } from './Components/registro-pasajeros/registro-pasajeros.component';
//Componentes Angular

//Importaciones servicios
import { PaisesServices } from './Services/paises.service';
import { VuelosService } from './Services/vuelos.service';
//Importaciones servicios

//Routes
import { routing, appRoutingProviders } from './app.routing';
//Routes

//Importaciones Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ListarVuelosComponent } from './Components/listar-vuelos/listar-vuelos.component';
import { UpdateVueloComponent } from './Components/update-vuelo/update-vuelo.component';
import { DetalleVueloComponent } from './Components/detalle-vuelo/detalle-vuelo.component';
//Importaciones Angular Material

//Arreglo importaciones Angular Material
const material = [
  MatSidenavModule,
  BrowserAnimationsModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
]
//Arreglo importaciones Angular Material

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    RegistroVuelosComponent,
    RegistroPasajerosComponent,
    ListarVuelosComponent,
    DetalleVueloComponent,
    UpdateVueloComponent,
    
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    material
  ],
  providers: [PaisesServices,
    VuelosService
    , appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
