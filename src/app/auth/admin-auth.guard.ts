import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private loginService : LoginService) {
  }
  
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Promise<boolean> {
    return this.loginService.hasRole('ADMIN');
  }
}
