import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Elect } from './electrodomesticos-list/elec';

const URL = 'https://63228695a624bced307997db.mockapi.io/api/Elect';
@Injectable({
  providedIn: 'root'
})
export class ElectDataService {

  constructor(private http: HttpClient) { }
  
  public getAll(): Observable<Elect[]>{

    return this.http.get<Elect[]>(URL)
      .pipe(
        tap((elec: Elect[]) => elec.forEach(elec=>elec.quantity=0) )
      );  
  }
}