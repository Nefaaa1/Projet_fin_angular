import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Passenger } from '../interfaces/passenger';

@Injectable({
  providedIn: 'root'
})
export class TitanicService {

  private baseUrl = 'http://localhost:3002/api';

  constructor(private http: HttpClient) { }


  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(this.baseUrl + '/passengers')
  }
}
