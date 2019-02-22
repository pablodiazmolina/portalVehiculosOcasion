import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoVehiculo } from '../interfaces/info-vehiculos.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  cargando = true;
  vehiculos: InfoVehiculo[] = [];

  constructor( private http: HttpClient) {
    this.cargarVehiculos();
  }

  private cargarVehiculos() {
    this.http.get( 'https://angular-citroen-hita.firebaseio.com/vehiculo.json' ).subscribe( (resp: InfoVehiculo []) => {
      this.vehiculos = resp;
      this.cargando = false;
    });
  }
}
