import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoVehiculo } from '../interfaces/info-vehiculos.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  cargando = true;
  vehiculos: InfoVehiculo[] = [];
  vehiculosFiltrados: InfoVehiculo[] = [];

  constructor( private http: HttpClient) {
    this.cargarVehiculos();
  }

  /** Método que carga todos los vehículos */
  private cargarVehiculos() {
    return new Promise((resolve, reject) => {
            this.http.get( 'https://angular-citroen-hita.firebaseio.com/vehiculo.json' ).subscribe( (resp: InfoVehiculo []) => {
        this.vehiculos = resp;
        this.cargando = false;
        resolve();
      });
    });
  }

  public buscarVehiculos(cadena: string) {
    if (this.vehiculos.length === 0) {
      this.cargarVehiculos().then(() => {
        this.filtrarVehiculos(cadena);
      });
    } else {
      this.filtrarVehiculos(cadena);
    }
  }

  /**
   * Método que filtra los vehículos por marca, modelo y precio
   */
  private filtrarVehiculos( cadena: string) {
    this.vehiculosFiltrados = [];
    cadena = cadena.trim().toLocaleLowerCase();

    this.vehiculosFiltrados = this.vehiculos.filter ( vehiculo => {
      const marca: string = vehiculo.marca.trim().toLocaleLowerCase();
      const modelo: string = vehiculo.modelo.trim().toLocaleLowerCase();

      if (marca.search (cadena) >= 0 ||
          modelo.search (cadena) >= 0 ||
          cadena.search (vehiculo.precio) >= 0) {
           return true;
      }
    });
    this.cargando = false;
  }
}
