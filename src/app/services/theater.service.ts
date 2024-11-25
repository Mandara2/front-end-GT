import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theater } from '../models/theater.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
}) //Inyeccion como en Spring
export class TheaterService {

  constructor(private http:HttpClient) {}

  list(): Observable<Theater[]> { //lista de teatros, observable es como una promesa
    return this.http.get<Theater[]>(`${environment.url_ms_cinema}/theaters`); //Esto devuelve una lista de teatros
  }
  view(id:number): Observable<Theater> {
    return this.http.get<Theater>(`${environment.url_ms_cinema}/theaters/${id}`);
  }
  create(theater:Theater): Observable<Theater> {
    return this.http.post<Theater>(`${environment.url_ms_cinema}/theaters`,theater); //theater es el body
  }
  update(theater:Theater): Observable<Theater> {
    return this.http.put<Theater>(`${environment.url_ms_cinema}/theaters/${theater.id}`,theater);
  }
  


  delete(id: number) {
    return this.http.delete<Theater>(`${environment.url_ms_cinema}/theaters/${id}`);
  }
}
