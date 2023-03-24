import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
      margin-top:2px;
    }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ["EU", "EFTA", "CARICOM", "PA", "AU", "USAN", "EEU", "AL", "ASEAN", "CAIS", "CEFTA", "NAFTA", "SAARC"];
  regionActiva: string = '';
  paises: Country[] = [];
  constructor(private http: PaisService) { }

  getClassCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activarRegion(region: string) {
    this.regionActiva = region;
    console.log(region)
    this.http.getPorRegion(region).subscribe(
      {
        next: (data) => {
          console.log(data)
          this.paises = data
        },
        error: (error) => {
          console.log(error)
          this.paises = []
        }
      }
    )
  }

}
