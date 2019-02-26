import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { InfoVehiculo } from '../../interfaces/info-vehiculos.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.styl']
})
export class DetailComponent implements OnInit {

  urlDetalleVehiculo = '';
  urlVehiculo = '';
  detalleVehiculo: DetalleVehiculo;
  vehiculo: InfoVehiculo;

  constructor( private route: ActivatedRoute, private http: HttpClient ) { }

  ngOnInit() {
    this.route.params.subscribe ( parametros => {
      this.cargarDetalleVehiculo(parametros.id);
    });
  }

  private cargarDetalleVehiculo(idVehiculo: string ) {
    this.urlDetalleVehiculo = `https://angular-citroen-hita.firebaseio.com/detalleVehiculo/${ idVehiculo }.json`;

    this.http.get( this.urlDetalleVehiculo ).subscribe( (resp: DetalleVehiculo ) => {
      this.detalleVehiculo = resp;
    });

    this.urlVehiculo = `https://angular-citroen-hita.firebaseio.com/vehiculo/${ idVehiculo }.json`;

    this.http.get( this.urlVehiculo ).subscribe( (resp: InfoVehiculo ) => {
      this.vehiculo = resp;
    });
  }
}
