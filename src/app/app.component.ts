import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { VehiculosService } from './services/vehiculos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  constructor( public infoPaginaService: InfoPaginaService,
               public vehiculosService: VehiculosService ) { }
}
