import { Component } from '@angular/core';
import { User } from '../interfaces/user'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.css']
})
export class ConnexionPageComponent {
  user = {
    login: "",
    password: ""
  }
  connexionOn: boolean = false;
  connexionOff: boolean = false;

  constructor(private As: AuthService, private router: Router) {

  }

  loginUser() {
    this.As.auth(this.user.login, this.user.password)
      .then(user => {
        console.log('Authentification réussie', user);
        this.connexionOn = true;
        setTimeout(() => {
          this.router.navigate(['/passengers']);
        }, 1000)
      })
      .catch(error => {
        this.connexionOff = true;
        setTimeout(() => {
          this.connexionOff = false;
        }, 1500)
        console.error('user:', this.user);
        console.error('Erreur d\'authentification:', error);
      });
  }
}
