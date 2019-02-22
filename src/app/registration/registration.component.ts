import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: User;
  token: string;

  constructor(public route: ActivatedRoute) {
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
  }

  isPasswordValid():boolean {
    return (this.user.password === this.user.password2);
  }

}
