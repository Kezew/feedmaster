import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  email:string = 'hajduzita88@gmail.com';
  name:string = 'Hajdu Zita';

  constructor() { }

  ngOnInit() {
  }

}
