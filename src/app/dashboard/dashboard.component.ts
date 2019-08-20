import { Component, OnInit, ViewChild } from '@angular/core';
import * as pieChartApi from '../../assets/data/pie-chart.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards = [
    // { title: 'Card 1', cols: 2, rows: 1 },
    // { title: 'Card 2', cols: 1, rows: 1 },
    // { title: 'Card 3', content: 'Content 3', cols: 1, rows: 2 },
    // { title: 'Card 4', content: 'Content 4', cols: 1, rows: 1 }
  ];

  lineChartApi = '../assets/data/line-chart.json';
  barChartApi = '../assets/data/bar-chart.json';
  pieChartApi = '../assets/data/pie-chart.json';
  donutChartApi = '../assets/data/donut-chart.json';

  // lineChart
  public lineChartData: Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(60,87,112,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      backgroundColor: '#3C5770',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];


  public barChartData: Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

  public barChartColors: Array<any> = [
    { // first color
      backgroundColor: '#082C40',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
    { // second color
      backgroundColor: '#8A0000',
      borderColor: '#01579B',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#03A9F4',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }];

    // Pie
  public pieChartData: number[] = [20, 10, 7];
  public pieChartColors: Array<any> = [
    {
      backgroundColor: ['#345881', '#D58E88', '#941114'],
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  
    public pieChartLabels: string[] = ['Ideas', 'Under Review', 'Approved'];
    public barChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartType = 'line';
    public pieChartType = 'pie';
    public barChartType = 'bar';
  
    // public randomizeType(): void {
    //   this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    //   this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
    // }
  
    public chartClicked(e: any): void {
      console.log(e);
    }
  
    public chartHovered(e: any): void {
      console.log(e);
    }

  constructor() {	}

  ngOnInit() {
    // console.log(pieChartApi.default);
    }

}
