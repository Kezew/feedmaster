import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {

  readonly endPoint = '/adduser';

  constructor(private httpService : HttpService) { }


  addUser(user: User) : Promise<object> {
      // itt csomagoljuk át olyan formátumra ami a szervernek megfelelő formátum
      // Minta input: {“username”:”Kiss János”,“email”:”teszt@gmail.com”,
      // ”roles”:”FEEDING_MANAGER”}
      let postData = {
          username : user.name,
          email: user.email,
          roles: user.authority
      };
    return this.httpService.post( this.endPoint, postData );

  }

}
