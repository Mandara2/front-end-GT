import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seat } from '../models/seat.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {

  constructor(private http:HttpClient) {}

  list(theaterId:number): Observable<Seat[]> { //lista de teatros, observable es como una promesa
    return this.http.get<Seat[]>(`${environment.url_ms_cinema}/seats?theater_id=${theaterId}`); //Esto devuelve una lista de teatros
  }
  view(id:number): Observable<Seat> {
    return this.http.get<Seat>(`${environment.url_ms_cinema}/seats/${id}`);
  }
  create(theater:Seat): Observable<Seat> {
    return this.http.post<Seat>(`${environment.url_ms_cinema}/seats`,theater); //theater es el body
  }
  update(theater:Seat): Observable<Seat> {
    return this.http.put<Seat>(`${environment.url_ms_cinema}/seats/${theater.id}`,theater);
  }
}