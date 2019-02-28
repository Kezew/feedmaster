import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: User;
  token: string;
  isLoginInvalid: boolean;

  constructor(
    public route: ActivatedRoute,
    private loginService: LoginService,
    private router: Router) {
      
    this.token = this.route.snapshot.paramMap.get('token');
    this.user = {
      email: '',
      name: '',
      name2: '',
      password: '',
      password2: ''
    };
    this.isLoginInvalid = false;
  }

  ngOnInit() {
    this.loginService.getUserFromToken(this.token).then(user => {
      this.user = user;
    }).catch(() => {
      // TODO hibatípus ellenőrzése
      this.router.navigate(['/login']);
    });
  }

  registration(): void {
    this.isLoginInvalid = false;
    this.isPasswordValid();
    this.emptyUserName();
    if (!this.isPasswordValid && !this.emptyUserName) {
      this.loginService.registerUser(this.user).then(() => {
        this.router.navigate(['/dashboard']);
      }).catch(() => {
        this.isLoginInvalid = true;
      });
    }
  }

  isPasswordValid(): boolean {
    return (this.user.password === this.user.password2);
  }

  emptyUserName(): void {
    if (this.user.name2 === '') {
      this.user.name2 = this.user.name;
    }
  }

}
