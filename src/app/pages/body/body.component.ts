import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../services/vehiculos.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.styl']
})
export class BodyComponent implements OnInit {

  constructor( public infoVehiculos: VehiculosService) { }

  ngOnInit() {
  }

}
