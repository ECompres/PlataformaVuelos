import { Injectable } from '@angular/core';

export class data {
    tempData() {
        if (localStorage.getItem('vuelos') === null || localStorage.getItem('vuelos') == undefined) {
            let vuelosArr = [
                {
                    id: 1,
                    pais: "Afganistan",
                    fechaHora: "2020-01-01T01:01",
                    tiempoVuelo: "3 horas",
                    codigo:"3D3HGR",
                    pasajeros: []
                },
                {
                    id: 2,
                    pais: "United States",
                    fechaHora: "2020-01-01T01:01",
                    tiempoVuelo: "3 horas",
                    codigo:"4KFJ43",
                    pasajeros: []
                }
            ]
            localStorage.setItem('vuelos', JSON.stringify(vuelosArr));

        }
    }
}


@Injectable()
export class VuelosService extends data {

    public vuelosArr = JSON.parse(localStorage.getItem('vuelos'));

    constructor() {
        super();
        this.tempData();
    }
    test() {
        console.log("test");
    }
    getVuelos() {
        return this.vuelosArr;
    }

    addVuelo(vuelo) {
        this.vuelosArr.push(vuelo);
        localStorage.setItem('vuelos', JSON.stringify(this.vuelosArr));
    }

    deleteVuelo(id) {
        for (let i = 0; i < this.vuelosArr.length; i++) {
            if (this.vuelosArr[i].id == id) {
                this.vuelosArr.splice(i, 1);
            }
        }
        localStorage.setItem('vuelos', JSON.stringify(this.vuelosArr));
    }

    updateVuelo(v1, v2) {
        for (let i = 0; i < this.vuelosArr.length; i++) {

            if (this.vuelosArr[i].id == v1.id) {
                this.vuelosArr[i].id = v2;
            }

        }

        localStorage.setItem('vuelos', JSON.stringify(this.vuelosArr));

    }

}