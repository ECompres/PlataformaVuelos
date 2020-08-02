import { Pasajeros } from "./pasajeros";

export class Vuelos {
    constructor(
        public id: number,
        public pais: string,
        public fechaHora: string,
        public tiempoVuelo: string,
        public codigo:string,
        public pasajeros: Pasajeros[]
    ) {

    }
}