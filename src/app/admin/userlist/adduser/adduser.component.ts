import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})

export class AdduserComponent implements OnInit {

    userName: string;
    userEmail: string;
    isNameInvalid: boolean;
    errors: any;

  constructor() {
      this.userName = '';
      this.userEmail = '';
      this.isNameInvalid = false;
      this.errors = {};
   }

  ngOnInit() {
  }


  add(): void {
      this.checkName();
      this.checkEmail();

      if(!this.isNameInvalid && !this.errors.email) {
          alert("jó adatok")
          // TODO ha jók az adatok akkor a felhasználót adja hozzá ???
          // srevice-n keresztül vagy a szerverre küldje fel?
          // ezután maradjon ezen az oldalon üres mezőkkel
      }

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
