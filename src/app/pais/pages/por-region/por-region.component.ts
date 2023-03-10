import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent {

  regiones:  string[] = ["South America", "Southern Europe", "Central America", "Eastern Asia"];
  regionActiva: string ='';
  constructor() { }

  activarRegion( region: string ){
    this.regionActiva = region;

  }

}
