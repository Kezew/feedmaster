import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges
} from "@angular/core";
import { Chart } from "angular-highcharts";

import { NutritionData } from "src/app/interfaces/recipe";
import { animate } from "highcharts";

@Component({
  selector: "app-nutrition-pie",
  templateUrl: "./nutrition-pie.component.html",
  styleUrls: ["./nutrition-pie.component.scss"]
})
export class NutritionPieComponent implements OnInit, OnChanges {
  @Input() data: NutritionData;
  chart: Chart;

  constructor() {}

  ngOnInit() {
    this.createChart(this.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.createChart(this.data);
  }

  createChart(data): void {
    this.chart = new Chart({
      chart: {
        type: "pie"
      },
      tooltip: {
        pointFormat: "<b>{point.percentage:.1f}%</b>"
      },
      title: {
        text: ""
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          size: 180,
          allowPointSelect: false,
          cursor: "pointer",
          dataLabels: {
            enabled: false
          }
        }
      },
      colors: ["#bc5f54", "#4bb89a", "#e4b101"],
      series: [
        {
          type: "pie",
          data: [
            ["Zsír", this.data.fat],
            ["Fehérje", this.data.protein],
            ["Szénhidrát", this.data.carbs]
          ],
          animation: false
        }
      ]
    });
  }
}
