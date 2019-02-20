import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { EditgroupComponent } from './groups/editgroup/editgroup.component';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { AdduserComponent } from './admin/userlist/adduser/adduser.component';
import { FooterComponent } from './footer/footer.component';
import { AddmenuComponent } from './menus/add/addmenu.component';
import { MenusComponent } from './menus/menus.component';

const routes: Routes = [
  { path: 'userlist', component: UserlistComponent },
  { path: 'userlist/adduser', component: AdduserComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'groups/editgroup', component: EditgroupComponent },
  { path: 'menus/add', component: AddmenuComponent },
//  { path: 'menus/edit/:id', component: AddmenuComponent },
  //{ path: 'menus/view/:id', component: AddmenuComponent },
  { path: 'menus', component: MenusComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
