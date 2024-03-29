import { Country } from './../interfaces/pais.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2'
  constructor(private http: HttpClient) { }

  buscarPais(termino:string) : Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino:string) : Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisAplha(termino:string) : Observable<Country>{
    const url = `${this.apiUrl}/alpha/${termino}`;
    return this.http.get<Country>(url);
  }

  getPorRegion (termino: string) : Observable<Country[]>{
    const url  = `${this.apiUrl}/regionalbloc/${termino}`;
    return this.http.get<Country[]>(url);
  }


}
