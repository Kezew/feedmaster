import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  isEmailInvalid: boolean;
  isPasswordInvalid: boolean;
  isLoginInvalid: boolean;

  constructor(private router: Router, private loginService: LoginService) {
    this.user = {
      email: '',
      password: ''
    };
    this.isEmailInvalid = false;
    this.isPasswordInvalid = false;
    this.isLoginInvalid = false;
  }

  ngOnInit() {
  }

  login(): void {
    this.isLoginInvalid = false;
    this.checkEmail();
    this.checkPassword();
    if (!this.isEmailInvalid && !this.isPasswordInvalid) {
      this.loginService.loginUser(this.user).then(roles => {
        this.loginService.setLoggedInRoles(roles);
        this.router.navigate(['']);
      }).catch(() => {
        this.isLoginInvalid = true;
      });

    }
  }

  checkEmail(): void {
    const emailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    this.isEmailInvalid = !emailRegEx.test(this.user.email);
  }

  checkPassword(): void {
    this.isPasswordInvalid = (this.user.password === '');
  }

}
