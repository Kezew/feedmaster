import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GroupsComponent } from "./groups/groups.component";
import { EditgroupComponent } from "./groups/editgroup/editgroup.component";
import { UserlistComponent } from "./admin/userlist/userlist.component";
import { AdduserComponent } from "./admin/userlist/adduser/adduser.component";
import { FooterComponent } from "./footer/footer.component";
import { AddmenuComponent } from "./menus/add/addmenu.component";
import { MenusComponent } from "./menus/menus.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";
import { RecipeCardComponent } from "./recipes/recipe-card/recipe-card.component";
import { NutritionPieComponent } from "./recipes/recipe-card/nutrition-pie/nutrition-pie.component";
import { AddgroupsComponent } from './addgroups/addgroups.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipesComponent } from "./recipes/recipes.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "userlist", component: UserlistComponent },
  { path: "userlist/adduser", component: AdduserComponent },
  { path: "groups", component: GroupsComponent },
  { path: "groups/editgroup/:id", component: EditgroupComponent },
  { path: "groups/add", component: AddgroupsComponent },

  { path: "menus/add", component: AddmenuComponent },
  //  { path: 'menus/edit/:id', component: AddmenuComponent },
  //{ path: 'menus/view/:id', component: AddmenuComponent },
  { path: "menus", component: MenusComponent },
  { path: "footer", component: FooterComponent },
  { path: "header", component: NavbarComponent },
  { path: "login", component: LoginComponent },
  { path: "recipes", component: RecipesComponent },
  { path: "recipe-card", component: RecipeCardComponent },
  { path: "pie", component: NutritionPieComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
