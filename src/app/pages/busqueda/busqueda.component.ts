import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiculosService } from '../../services/vehiculos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.styl']
})
export class BusquedaComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               public vehiculoService: VehiculosService ) { }

  ngOnInit() {
    this.route.params.subscribe ( params => {
      this.vehiculoService.cargando = true;
      console.clear();
      this.vehiculoService .buscarVehiculos(params.cadena);
    });
  }
}
