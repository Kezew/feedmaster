import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { EditgroupComponent } from './groups/editgroup/editgroup.component';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { AdduserComponent } from './admin/userlist/adduser/adduser.component';



const routes: Routes = [
  { path: 'userlist', component: UserlistComponent },
  { path: 'userlist/adduser', component: AdduserComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'groups/editgroup', component: EditgroupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
