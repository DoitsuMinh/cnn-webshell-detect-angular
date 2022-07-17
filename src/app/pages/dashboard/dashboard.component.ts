import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { HttpClient } from '@angular/common/http';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;
  public salesChart;
  data1 =[]
  data2 = []
  

  constructor(private http: HttpClient){}
  ngOnInit() {

    this.http.get('http://localhost:5000/dashboard').subscribe((res:any) => {
      if(res){
        this.data1 = res.time_accuracy;
        this.data2 = res.overall_accuracy;

        var gradientChartOptionsConfigurationWithTooltipBlue: any = {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
    
          tooltips: {
            backgroundColor: '#f5f5f5',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
          },
          responsive: true,
          scales: {
            yAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(29,140,248,0.0)',
                zeroLineColor: "transparent",
              },
              ticks: {
                suggestedMin: 60,
                suggestedMax: 125,
                padding: 20,
                fontColor: "#2380f7"
              }
            }],
    
            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(29,140,248,0.1)',
                zeroLineColor: "transparent",
              },
              ticks: {
                padding: 20,
                fontColor: "#2380f7"
              }
            }]
          }
        };
    
        var gradientChartOptionsConfigurationWithTooltipPurple: any = {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
    
          tooltips: {
            backgroundColor: '#f5f5f5',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
          },
          responsive: true,
          scales: {
            yAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(29,140,248,0.0)',
                zeroLineColor: "transparent",
              },
              ticks: {
                suggestedMin: 60,
                suggestedMax: 125,
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }],
    
            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(225,78,202,0.1)',
                zeroLineColor: "transparent",
              },
              ticks: {
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }]
          }
        };
    
        var gradientChartOptionsConfigurationWithTooltipRed: any = {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
    
          tooltips: {
            backgroundColor: '#f5f5f5',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
          },
          responsive: true,
          scales: {
            yAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(29,140,248,0.0)',
                zeroLineColor: "transparent",
              },
              ticks: {
                suggestedMin: 0.1,
                suggestedMax: 50,
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }],
    
            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(233,32,16,0.1)',
                zeroLineColor: "transparent",
              },
              ticks: {
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }]
          }
        };
    
        var gradientChartOptionsConfigurationWithTooltipOrange: any = {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
    
          tooltips: {
            backgroundColor: '#f5f5f5',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
          },
          responsive: true,
          scales: {
            yAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(29,140,248,0.0)',
                zeroLineColor: "transparent",
              },
              ticks: {
                suggestedMin: 50,
                suggestedMax: 110,
                padding: 20,
                fontColor: "#ff8a76"
              }
            }],
    
            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(220,53,69,0.1)',
                zeroLineColor: "transparent",
              },
              ticks: {
                padding: 20,
                fontColor: "#ff8a76"
              }
            }]
          }
        };
    
        var gradientChartOptionsConfigurationWithTooltipGreen: any = {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
    
          tooltips: {
            backgroundColor: '#f5f5f5',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
          },
          responsive: true,
          scales: {
            yAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(29,140,248,0.0)',
                zeroLineColor: "transparent",
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 1,
                padding: 20,
                fontColor: "#9e9e9e"
              }
            }],
    
            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(0,242,195,0.1)',
                zeroLineColor: "transparent",
              },
              ticks: {
                padding: 20,
                fontColor: "#9e9e9e"
              }
            }]
          }
        };
    
    
        var gradientBarChartConfiguration: any = {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
    
          tooltips: {
            backgroundColor: '#f5f5f5',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
          },
          responsive: true,
          scales: {
            yAxes: [{
    
              gridLines: {
                drawBorder: false,
                color: 'rgba(29,140,248,0.1)',
                zeroLineColor: "transparent",
              },
              ticks: {
                suggestedMin: 60,
                suggestedMax: 120,
                padding: 20,
                fontColor: "#9e9e9e"
              }
            }],
    
            xAxes: [{
    
              gridLines: {
                drawBorder: false,
                color: 'rgba(29,140,248,0.1)',
                zeroLineColor: "transparent",
              },
              ticks: {
                padding: 20,
                fontColor: "#9e9e9e"
              }
            }]
          }
        };
    
        this.canvas = document.getElementById("chartLineRed");
        this.ctx = this.canvas.getContext("2d");
    
        var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
    
        gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
        gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
        gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors
    
        var data = {
          labels: ['Naive', 'MLP', 'CNN'],
          datasets: [{
            label: "Time",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: '#ec250d',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#ec250d',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#ec250d',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [parseFloat(this.data1[0][0]), parseFloat(this.data1[1][0]), parseFloat(this.data1[2][0])],
          }]
        };
    
        var myChart = new Chart(this.ctx, {
          type: 'line',
          data: data,
          options: gradientChartOptionsConfigurationWithTooltipRed
        });
    
    
        this.canvas = document.getElementById("chartLineGreen");
        this.ctx = this.canvas.getContext("2d");
    
    
        var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
    
        gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
        gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
        gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors
    
        var data2 = {
          labels: ['Naive', 'MLP', 'CNN'],
          datasets: [{
            label: "Accuracy",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: '#00d6b4',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#00d6b4',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#00d6b4',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [parseFloat(this.data1[0][1]), parseFloat(this.data1[1][1]), parseFloat(this.data1[2][1])],
          }]
        };
    
        var myChart = new Chart(this.ctx, {
          type: 'line',
          data: data2,
          options: gradientChartOptionsConfigurationWithTooltipGreen
    
        });
    
    
    
        var chart_labels = ['True Positive Rate', 'True Negative Rate', 'Precision',
        'Negative Predict value', 'False Positive Rate', 'False Negative Rate', 'False Discovery'];
        this.datasets = [
          [parseFloat(this.data2[0]), parseFloat(this.data2[1]), parseFloat(this.data2[2]), parseFloat(this.data2[3]),
          parseFloat(this.data2[4]), parseFloat(this.data2[5]), parseFloat(this.data2[6])],
        ];
        this.data = this.datasets[0];
    
    
    
        this.canvas = document.getElementById("chartBig1");
        this.ctx = this.canvas.getContext("2d");
    
        var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
    
        gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
        gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
        gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors
    
        var config = {
          type: 'line',
          data: {
            labels: chart_labels,
            datasets: [{
              label: "Data",
              fill: true,
              backgroundColor: gradientStroke,
              borderColor: '#ecd90d',
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: '#ec250d',
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: '#ec250d',
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: this.data2,
            }]
          },
          options: gradientChartOptionsConfigurationWithTooltipGreen
        };
        this.myChartData = new Chart(this.ctx, config);
    
      }else{
        alert('Nothing')
      }
    });

  //   this.datasets = [
  //     [0, 20, 10, 30, 15, 40, 20, 60, 60],
  //     [0, 20, 5, 25, 10, 30, 15, 40, 40]
  //   ];
  //   this.data = this.datasets[0];


  //   var chartOrders = document.getElementById('chart-orders');

  //   parseOptions(Chart, chartOptions());


  //   var ordersChart = new Chart(chartOrders, {
  //     type: 'bar',
  //     options: chartExample2.options,
  //     data: chartExample2.data
  //   });

  //   var chartSales = document.getElementById('chart-sales');

  //   this.salesChart = new Chart(chartSales, {
	// 		type: 'line',
	// 		options: chartExample1.options,
	// 		data: chartExample1.data
	// 	});
  // }


  // public updateOptions() {
  //   this.salesChart.data.datasets[0].data = this.data;
  //   this.salesChart.update();

    
  };

}

