import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipe-card",
  templateUrl: "./recipe-card.component.html",
  styleUrls: ["./recipe-card.component.scss"]
})
export class RecipeCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //   var chart = {
    //     plotBackgroundColor: null,
    //     plotBorderWidth: null,
    //     plotShadow: false
    //   };
    //   var tooltip = {
    //     pointFormat: "<b>{point.percentage:.1f}%</b>"
    //   };
    //   var plotOptions = {
    //     pie: {
    //       allowPointSelect: true,
    //       cursor: "pointer",
    //       dataLabels: {
    //         enabled: false
    //       }
    //     }
    //   };
    //   var colors = ["#bc5f54", "#4bb89a", "#e4b101"];
    //   var series = [
    //     {
    //       type: "pie",
    //       data: [["Zsír", 12.8], ["Fehérje", 8.5], ["Szénhidrát", 6.2]]
    //     }
    //   ];
    //   var json = {};
    //   json.chart = chart;
    //   json.title = "";
    //   json.tooltip = tooltip;
    //   json.series = series;
    //   json.plotOptions = plotOptions;
    //   json.colors = colors;
    //   $(".pie").highcharts(json);
  }
}
