import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.styl']
})
export class DetailComponent implements OnInit {

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe ( parametros => { console.log(parametros ['id']); });
  }
}
