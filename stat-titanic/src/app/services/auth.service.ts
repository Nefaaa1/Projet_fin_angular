import { Injectable } from '@angular/core';
import { TitanicService } from './titanic.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = [];
  user!: User;


  constructor(private titanicService: TitanicService, private router: Router) {
    this.titanicService.getUsers().subscribe(u => this.users = u);
  }

  auth(login: string, password: string): Promise<any> {
    const user = this.users.find(u => login === u.login && password === u.password);
    if (user) {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(this.user));
      return Promise.resolve(user);
    } else {
      return Promise.reject('Incorrect identifiers');
    }
  }

  unauth(): void {
    localStorage.removeItem("user");
    this.router.navigate(['']);
  }
}
