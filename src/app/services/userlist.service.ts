import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  constructor(private httpService : HttpService) { }

  getUsers() : Promise<User[]> {
      return new Promise( (resolve, reject) => {
          this.httpService.get('/userlist').then( usersFromServer => {
              let users : User[] = [];
              // "átmegyünk" a szervertől kapott tömbbön és átcsomagoljuk olyan
              // formátumra amire a userlist.ts-nek szüksége van
              for (let u of usersFromServer) {
                  users.push({
                      name : u.username,
                      email: u.emailAddress,
                      password: '',     // ez azért kell mert a user.ts-ben szükséges a password megadása
                      authority: u.roles
                  });
              }
              resolve(users);
          });
      });
  }
}
