import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Passenger } from '../interfaces/passenger';

@Injectable({
  providedIn: 'root'
})
export class TitanicService {

  private baseUrl = 'http://localhost:3002/api';

  constructor(private http: HttpClient) { }


  getPassengers(filter: any): Observable<Passenger[]> {
    const allpassengers = this.http.get<Passenger[]>(this.baseUrl + '/passengers');
    return allpassengers.pipe(
      map(passengers => {
        if (filter.sex) {
          passengers = passengers.filter(passenger => passenger.Sex === filter.sex);
        }
        if (filter.age) {
          passengers = passengers.filter(passenger => passenger.Age === filter.age);
        }
        if (filter.Pclass) {
          passengers = passengers.filter(passenger => passenger.Pclass === filter.Pclass);
        }
        if (filter.Survived) {
          passengers = passengers.filter(passenger => passenger.Survived === filter.Survived);
        }
        return passengers;
      })
    );
  }

}
