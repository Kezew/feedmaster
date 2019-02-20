import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { EditgroupComponent } from './groups/editgroup/editgroup.component';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { AdduserComponent } from './admin/userlist/adduser/adduser.component';
import { FooterComponent } from './footer/footer.component';
import { AddmenuComponent } from './menus/addmenu/addmenu.component';
import { MenusComponent } from './menus/menus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: 'userlist', component: UserlistComponent },
  { path: 'userlist/adduser', component: AdduserComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'groups/editgroup', component: EditgroupComponent },
  { path: 'menus/edit/:id', component: AddmenuComponent },
  { path: 'menus', component: MenusComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
