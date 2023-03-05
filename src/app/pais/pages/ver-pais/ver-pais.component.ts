import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private http: PaisService,private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.activeRouter.params
    .pipe(
      switchMap( ({id}) => this.http.getPaisAplha(id))
    )
    .subscribe(
      (resp: any)=> {
        console.log(resp[0])
        this.pais = resp[0];
      }
    )

  }

}
