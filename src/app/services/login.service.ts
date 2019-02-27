import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedInRoles : string[];

  constructor(private httpService: HttpService) {
    this.loggedInRoles = null;
  }

  getLoggedInRoles(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      if (this.loggedInRoles !== null) {
        resolve(this.loggedInRoles);
      } else {
        this.httpService.get('/checkroles').then( roles => {
          this.loggedInRoles = roles;
          resolve(roles);
        } ).catch( () => {
          this.loggedInRoles = [];
          resolve(this.loggedInRoles);
        });
      }
    });
  }
  setLoggedInRoles(rs : string[]) : void {
    this.loggedInRoles = rs;
  }
  clearLoggedInRoles() : void {
    this.loggedInRoles = [];
  }
  hasRole(r: string): Promise<boolean> {
    return new Promise( resolve => {
      this.getLoggedInRoles().then(currentRoles => {
        resolve( currentRoles.indexOf(r) != -1 );
      });
    } );
  }
  hasAnyRole(): Promise<boolean> {
    return new Promise( resolve => {
      this.getLoggedInRoles().then(currentRoles => {
        resolve( currentRoles.length > 0 );
      });
    } );
  }

  //LOGOUT
  logoutUser(): Promise<void> {
    return this.httpService.post('/logout', {});
  }

  //LOGIN
  loginUser(data: User): Promise<string[]> {
    return this.httpService.postFormData('/login', data);
  }
  
  getUserFromToken(token: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      this.httpService.get('/verify-registration/' + token)
        .then(response => {
          resolve((response as any).userData);
        }).catch(reject);
    });
  }

  //REGISTRATION
  registerUser(user: User) : Promise<void> {
    let postData = {
      emailAddress : user.email,
      originalUsername : user.name,
      newUsername : user.name2,
      password: user.password,
      confirmPassword: user.password2,
    };
    return this.httpService.post('/verify-registration', postData);
  }

}
