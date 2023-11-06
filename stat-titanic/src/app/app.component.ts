import { Component, OnInit } from '@angular/core';
import { TitanicService } from './services/titanic.service';
import { Passenger } from './interfaces/passenger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  passengers: Passenger[] = [];

  constructor(private titanicService: TitanicService) { }


  ngOnInit(): void {
    this.titanicService.getPassengers().subscribe(u => console.log(u));
  }

}
