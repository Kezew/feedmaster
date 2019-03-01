import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AdduserService } from 'src/app/services/adduser.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})

export class AdduserComponent implements OnInit {

  user: User;
  authorities: [string, string, string];
  isNameInvalid: boolean;
  isSuccessAdd: boolean;
  isErrorAdd: boolean;
  isWrongEmail: boolean;
  isDatabaseError: boolean;
  errors: any;
  router: Router;


  constructor(private adduserService: AdduserService) {
    this.user = { name: '', email: '', password: '', authority: [''] };
    this.authorities = ['ADMIN', 'FEEDING_MANAGER', 'NUTRITIONIST'];
    this.isNameInvalid = false;
    this.errors = {};
    this.isSuccessAdd = false;
    this.isErrorAdd = false;
    this.isWrongEmail = false;
    this.isDatabaseError = false;
  }

  ngOnInit() {
  }


  add(): void {
    this.checkName();
    this.checkEmail();

    if (!this.isNameInvalid && !this.errors.email) {

      // sikeres hozzáadás
      this.adduserService.addUser(this.user).then(() => {
        this.isSuccessAdd = true;     // üzenet div engedélyezése egyből, hogy sikeres volt
        this.user.name = '';
        this.user.email = '';
        this.user.authority = [''];
        // az input mezők lenullázása
        setTimeout(() => {
          this.isSuccessAdd = false;  // 2mp múlva eltüntejük a sikeres hozzásadás div-et a html-ből
        }, 2000);
    }).catch((error: HttpErrorResponse) => {
        // TODO itt kellene megvizsgálni, hogy mi miatt nem került hozzáadásra a Felhasználó
        // hibaüzenet alapján engedélyezzük a megfelelő div-et a html-ben
        //alert(error.error.errors);
        if (error.error.errors.indexOf('already-existing-email-address') > -1) {
            this.isWrongEmail = true;
        }
        if (error.error.errors.indexOf('database-failure') > -1 ) {
            this.isDatabaseError = true;
        }

        // üzenet div engedélyezése egyből, hogy sikertelen volt
        this.isErrorAdd = true;
        // az input mezőket nem nullázom le, 3mp múlva eltüntejük a sikertelen hozzásadás div-et a html-ből
        setTimeout(() => {
          this.isErrorAdd = false;
          this.isWrongEmail = false;
          this.isDatabaseError = false;
        }, 3000);
    });

      // this.isSuccessAdd = true;
      // setTimeout(() => {
      //   this.userName = '';
      //   this.userEmail = '';
      //   this.authority = ["admin", "user", "dietetic"];
      //   this.isSuccessAdd = false;
      // }, 2000);


    }
    // else {
    //   this.isErrorAdd = true;
    //   setTimeout(() => {
    //     this.userName = '';
    //     this.userEmail = '';
    //     this.authority = ['admin', 'user', 'dietetic'];
    //     this.isErrorAdd = false;
    //   }, 3000);
    // }


  }

  checkName(): void {
    this.isNameInvalid = (this.user.name === '');  // egyyenlő-e az üres string-el ???
  }

  checkEmail(): void {
    this.errors.emailEmpty = (this.user.email === '');
    const regEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    this.errors.emailInvalid = !this.errors.emailEmpty && !regEmail.test(this.user.email);
    // itt kellene ellenórizni, hogy létezik-e már a mail ??
    // nem szoktuk ezt ellenórizni
    // szervertől kérdezzük !!  >>> mi van akkor, ha nem megy a szerver ??
    this.errors.email = this.errors.emailEmpty || this.errors.emailInvalid;
  }

}
