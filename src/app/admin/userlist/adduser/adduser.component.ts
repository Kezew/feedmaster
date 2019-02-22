import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})

export class AdduserComponent implements OnInit {

  userName: string;
  userEmail: string;
  authority: [string, string, string];
  isNameInvalid: boolean;
  isSuccessAdd: boolean;
  isErrorAdd: boolean;
  errors: any;
  router: Router;

  constructor() {
    this.userName = '';
    this.userEmail = '';
    this.authority = ["admin", "user", "dietetic"];
    this.isNameInvalid = false;
    this.errors = {};
    this.isSuccessAdd = false;
    this.isErrorAdd = false;

  }

  ngOnInit() {
  }


  add(): void {
    this.checkName();
    this.checkEmail();

    if (!this.isNameInvalid && !this.errors.email) {
      this.isSuccessAdd = true;
      setTimeout(() => {
        this.userName = '';
        this.userEmail = '';
        this.authority = ["admin", "user", "dietetic"];
        this.isSuccessAdd = false;
      }, 2000);


    } else {
      this.isErrorAdd = true;
      setTimeout(() => {
        this.userName = '';
        this.userEmail = '';
        this.authority = ["admin", "user", "dietetic"];
        this.isErrorAdd = false;
      }, 3000);
    }
    //this.router.navigate(['/userlist/adduser']);
    //this.router.navigate(['/userlist/adduser']);
    // this.studentService.addStudents(this.student).then(() => {
    //   this.router.navigate(['/students']);  // hiszen ekkor már visszajött a szerverről a korrekt cucc
    // });
    // TODO ha jók az adatok akkor a felhasználót adja hozzá ???
    // srevice-n keresztül vagy a szerverre küldje fel?
    // ezután maradjon ezen az oldalon üres mezőkkel


  }

  checkName(): void {
    this.isNameInvalid = (this.userName === '');  // egyyenlő-e az üres string-el ???
  }

  checkEmail(): void {
    this.errors.emailEmpty = (this.userEmail === '');
    const regEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    this.errors.emailInvalid = !this.errors.emailEmpty && !regEmail.test(this.userEmail);
    // itt kellene ellenórizni, hogy létezik-e már a mail ??
    // nem szoktuk ezt ellenórizni
    // szervertől kérdezzük !!  >>> mi van akkor, ha nem megy a szerver ??
    this.errors.email = this.errors.emailEmpty || this.errors.emailInvalid;
  }

}
