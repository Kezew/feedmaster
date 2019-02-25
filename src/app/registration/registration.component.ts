import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: User;
  token: string;

  constructor(public route: ActivatedRoute, private loginService: LoginService) {
    this.token = this.route.snapshot.paramMap.get('token');

    this.user = {
      email: 'hajduzita88@gmail.com',
      name: 'Hajdu Zita',
      password: '',
      password2: ''
    };
  }

  ngOnInit() {
    // TODO lekérdezés szerverre
    /*registrationService.getUserFromToken(this.token).then(user => {

    });
    */

    this.loginService.getUserFromToken().then(user => {
      this.user = user;
    });
  }



  isPasswordValid(): boolean {
    return (this.user.password === this.user.password2);
  }

}
