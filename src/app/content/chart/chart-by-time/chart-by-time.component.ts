import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartService, DateWithUV, JsonChartModelType, GroupByDateAndCalculateSumAndAvgType} from '../chart.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-chart-by-time',
  templateUrl: './chart-by-time.component.html',
  styleUrls: ['./chart-by-time.component.scss'],
})
export class ChartByTimeComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  

  constructor(private chartService: ChartService) {
    
  }

  ngOnInit(): void {
    console.log('Getting data asynchronously...');
    this.chart?.update();
    //Async call...
    let subscription = this.chartService
      .getGroupedByDateAndCalculateSumAndAvgData()
      .subscribe ((keyValueObj:GroupByDateAndCalculateSumAndAvgType) => {
        Object.keys(keyValueObj).map( key => {
          console.log( key, keyValueObj[key].uvAvg);
          this.barChartData.labels?.push(key);
          this.barChartData.datasets[0].data.push(keyValueObj[key].uvAvg);
          this.chart?.update();
        } );
      }, 
      (error:any)=> {
        //Do error handling
        console.log(error);
      }
      );
      
    console.log('ngOnInit finished');
  }


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    
    labels: [ ],
    datasets: [
      { data: [], label: 'UV Index' }
    ]
  };

  

  
}
