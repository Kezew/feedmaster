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
  isUsersEmpty: boolean;

  constructor(private userlistService : UserlistService) {
      this.isUsersEmpty = false;
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
      this.users = [];

   }

  ngOnInit() {
      this.userlistService.getUsers().then( users => {
          // itt kellene megvizsgálnom, hogy üres-e a users tömb???
          // ennek alapján isUsersEmpty állítani, vagy nem
          this.users = users;
          
      } );
  }



}
