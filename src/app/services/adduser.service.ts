import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {

  readonly endPoint = '/adduser';

  constructor(private httpService : HttpService) { }


  addUser(user: User) : Promise < object > {
      let postData = {
          userName : user.name,
          
      };
    return this.httpService.post( this.endPoint, postData );

  }

}
