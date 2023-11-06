import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitanicService {

  private baseUrl = 'http://localhost:3002/api';

  constructor(private http: HttpClient) { }


  getPassengers(): Observable<[]> {
    return this.http.get<[]>(this.baseUrl + '/passengers')
  }
}
