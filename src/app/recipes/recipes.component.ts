import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"]
})
export class RecipesComponent implements OnInit {
  collapsed: boolean;

  constructor() {
    this.collapsed = true;
  }

  ngOnInit() {}

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }
}
