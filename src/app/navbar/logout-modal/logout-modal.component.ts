import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
//import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss']
})
export class LogoutModalComponent implements OnInit {

  //user: User;

  constructor(
    public activeModal: NgbActiveModal,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  logout(): void {
    this.loginService.logoutUser().then(() => {
      this.router.navigate(['/login']);
    }).finally(() => {
      this.loginService.clearLoggedInRoles();
    });
  }
}
