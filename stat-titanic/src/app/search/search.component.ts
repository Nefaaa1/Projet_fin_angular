import { Component, OnInit } from '@angular/core';
import { TitanicService } from '../services/titanic.service';
import { Passenger } from '../interfaces/passenger';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  UserConnected?: User | null;
  passengers: Passenger[] = [];
  passengersM: Passenger[] = [];
  passengersF: Passenger[] = [];
  passengersC1: Passenger[] = [];
  passengersC2: Passenger[] = [];
  passengersC3: Passenger[] = [];
  filter: any = {
    sex: "",
    age: "",
    Pclass: "",
    Survived: ""
  }

  //STAT OPTIONS
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  barChartLabels = ['Percentage of each Sex'];
  barChartLegend = false;
  barChartData = [
    { data: [0], label: 'Female' },
    { data: [0], label: 'Male' }
  ];

  pieChartLabels = ['Percentage of each Class'];
  pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  pieChartData = {
    labels: [['Classe 1'], ['Classe 2'], 'Classe 3'],
    datasets: [
      {
        data: [3, 10, 2],
      },
    ],
  };
  pieChartType: ChartType = 'pie';

  //FUNCTION

  constructor(private titanicService: TitanicService, private As: AuthService) {
    const userData = localStorage.getItem("user");
    if (userData) {
      this.UserConnected = JSON.parse(userData);
    }
  }


  ngOnInit(): void {
    this.reloadSearch()
  }

  reloadSearch(): void {
    this.titanicService.getPassengers(this.filter).subscribe(u => {
      this.passengers = u;
      this.passengersM = u.filter(passenger => passenger.Sex === "male");
      this.passengersF = u.filter(passenger => passenger.Sex === "female");
      this.passengersC1 = u.filter(passenger => passenger.Pclass == 1);
      this.passengersC2 = u.filter(passenger => passenger.Pclass == 2);
      this.passengersC3 = u.filter(passenger => passenger.Pclass == 3);
      this.barChartData = [
        { data: [this.passengersF.length / this.passengers.length * 100], label: 'Female' },
        { data: [this.passengersM.length / this.passengers.length * 100], label: 'Male' }
      ];
      this.pieChartData = {
        labels: [['Classe 1'], ['Classe 2'], 'Classe 3'],
        datasets: [
          {
            data: [this.passengersC1.length, this.passengersC2.length, this.passengersC3.length],
          },
        ],
      };
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

  unauth(): void {
    this.As.unauth()
  }
}
