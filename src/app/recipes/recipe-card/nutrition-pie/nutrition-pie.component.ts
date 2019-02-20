import { Component, OnInit } from "@angular/core";
import { Chart } from "angular-highcharts";

@Component({
  selector: "app-nutrition-pie",
  templateUrl: "./nutrition-pie.component.html",
  styleUrls: ["./nutrition-pie.component.scss"]
})
export class NutritionPieComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: "pie"
    },
    title: {
      text: ""
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %"
        }
      }
    },
    colors: ["#bc5f54", "#4bb89a", "#e4b101"],
    series: [
      {
        type: "pie",
        data: [["Zsír", 12.8], ["Fehérje", 8.5], ["Szénhidrát", 6.2]]
      }
    ]
  });

  constructor() {}

  ngOnInit() {}
}
