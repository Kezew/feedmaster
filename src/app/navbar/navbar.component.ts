import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarOpen: boolean = false;

  constructor(
    private modalService: NgbModal,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout() {
    this.modalService.open(LogoutModalComponent).result.then( () => {
      this.loginService.logoutUser().then(() => {
        this.router.navigate(['/login']);
      });
    } );
  }
}
