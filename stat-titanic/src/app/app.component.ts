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
  filter: any = {
    sex: "",
    age: "",
    Pclass: "",
    Survived: ""
  }

  constructor(private titanicService: TitanicService) { }


  ngOnInit(): void {
    this.reloadSearch()
  }

  reloadSearch(): void {
    this.titanicService.getPassengers(this.filter).subscribe(u => {
      this.passengers = u;
    });
  }

  resetFilters(): void {
    this.filter = {
      sex: "",
      age: "",
      Pclass: "",
      Survived: ""
    }
    this.reloadSearch()
  }

}
