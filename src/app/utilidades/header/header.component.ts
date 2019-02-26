import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  constructor( public infoPagina: InfoPaginaService,
               private router: Router  ) { }

  ngOnInit() {
  }

  buscarVehiculo(cadena: string) {
    if (cadena.length < 1) {
      return;
    }

    this.router.navigate(['/busqueda', cadena]);
  }
}
