import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  constructor(private httpService : HttpService) { }

  getUsers() : Promise<User[]> {
      return this.httpService.get('/list-users');
  }
}
