import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  constructor( public infoPaginaService: InfoPaginaService ) { }
}
