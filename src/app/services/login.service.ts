import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService: HttpService) { }

  getUserFromToken(): Promise<User> {
    return new Promise((resolve, reject) =>{
      this.httpService.get("/verify-registration").then(data =>{
        resolve(this.userReg(data));
      });
    });
  }

  private userReg(data:any): User{
    return data;
  }

  loginUser(data: User): Promise<void>{
    return this.httpService.postFormData('/login', data);
  }

}
