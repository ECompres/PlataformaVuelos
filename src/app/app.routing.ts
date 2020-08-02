import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./Components/home/home.component";
import { RegistroVuelosComponent } from "./Components/registro-vuelos/registro-vuelos.component";
import { RegistroPasajerosComponent } from "./Components/registro-pasajeros/registro-pasajeros.component"
import { ListarVuelosComponent } from './Components/listar-vuelos/listar-vuelos.component';
import { UpdateVueloComponent } from './Components/update-vuelo/update-vuelo.component';
import { DetalleVueloComponent } from './Components/detalle-vuelo/detalle-vuelo.component';
const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "registroVuelos", component: RegistroVuelosComponent },
  { path: "registroPasajeros", component: RegistroPasajerosComponent },
  { path: "listarVuelos", component: ListarVuelosComponent },
  { path: "updateVuelo/:id", component: UpdateVueloComponent },
  { path: "detailVuelo/:id", component: DetalleVueloComponent},
  { path: "**", component: HomeComponent },
]
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);