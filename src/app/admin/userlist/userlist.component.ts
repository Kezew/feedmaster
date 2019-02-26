import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserlistService } from 'src/app/services/userlist.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  /*  ??? fog-e változni ???
  User {
  id? : number;
  name?: string;
  email: string;
  password: string;
  password2?: string;
  authority?: string[];
  }
  */

  users: User[];


  constructor(private userlistService : UserlistService) {

      this.users = [
          {
              name: 'Teszt Elek',
              email: 'tesztelek@gmail.com',
              password: '',
              authority: ['ADMIN'],
          },
          {
              name: 'Tank Aranka',
              email: 'tankaranka@gmail.com',
              password: '',
              authority: ['FEEDING_MANAGER'],
          },
          {
              name: 'Fá Zoltán',
              email: 'fazoltan@gmail.com',
              password: '',
              authority: ['NUTRITIONIST'],
          },

      ];
      // this.users = [];

   }

  ngOnInit() {
      this.userlistService.getUsers().then( users => {
          // ha üres a tömb akkor az a HTML-ben már le van kezelve
          this.users = users;
          // TODO hivatkozás azokra ami nekem kell !!!
      } );
  }



}
