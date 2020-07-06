import { Component, OnInit ,Inject,ViewChild} from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';
import * as Chart from 'chart.js';
import { Device} from '../shared/device';
import { DevicesService } from '../services/devices.service';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  

  displayedColumns: string[] = ['status', 'modelNo','location', 'temperature','voltage'];
  dataSource = new MatTableDataSource<any>();

  // @ViewChild('myCanvas')
  // public context: CanvasRenderingContext2D;
  // public chartType: string = 'line';
  // public chartData: any[];
  // public chartLabels: any[];
  // public chartColors: any[];
  // public chartOptions: any;
  devices: Device[];
  deviceData: any=[];

  constructor(private devicesService: DevicesService,
    @Inject('BaseURL') private BaseURL,private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.devicesService.getDevices()
    .subscribe((devices:any) => {
      console.log("@@", devices)
      this.deviceData = devices
     // this.devices = devices
     this.dataSource.data = this.deviceData;
    });
    console.log(this.dataSource);
    // this.chartData = [{
    //   data: [3, 1, 4, 2, 5],
    //   label: 'Anthracnose',
    //   fill: false
    // }];
    
    console.log(this.dataSource);
  }
  
 

  //   this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  //   this.chartColors = [{
  //     backgroundColor: 'rgba(0, 0, 0, 0.2)',
  //        borderColor: 'rgba(0, 0, 0, 1)'
  //   }];
  //   this.chartOptions = {
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero: true,
  //           stepSize: 1
  //         }
  //       }]
  //     },
  //     annotation: {
  //        drawTime: 'beforeDatasetsDraw',
  //        annotations: [{
  //           type: 'box',
  //           id: 'a-box-1',
  //           yScaleID: 'y-axis-0',
  //           yMin: 0,
  //           yMax: 1,
  //           backgroundColor: '#4cf03b'
  //        }, {
  //           type: 'box',
  //           id: 'a-box-2',
  //           yScaleID: 'y-axis-0',
  //           yMin: 1,
  //           yMax: 2.7,
  //           backgroundColor: '#fefe32'
  //        }, {
  //           type: 'box',
  //           id: 'a-box-3',
  //           yScaleID: 'y-axis-0',
  //           yMin: 2.7,
  //           yMax: 5,
  //           backgroundColor: '#fe3232'
  //        }]
  //     }
  //   }
  
  //    }

    


  innerRadius : any;

  // first doughnut
  public doughnutChartLabels = ['Running', 'Inactive ', 'Inactive '];
  public doughnutChartData = [100,70,190];
  public doughnutChartType = 'doughnut';

  public doughnutColor: Array<any> = [
    { 
      backgroundColor: ['#ff0000', '#ffff00', '#0080ff']
    }
  ];

  public doughnutOption  = {
    legend: {
       position: 'right',
       boxWidth: 10
    },
    elements:{
      center:{
       text:'Red color',
       color:'#fff000',
       lineHeight: 25,
       minFontSize: 20,
       sidePadding: 20
      }
    },
    cutoutPercentage: 75
  };
 
  // public doughnutChartPlugins: PluginServiceGlobalRegistrationAndOptions[] = [{
  //   beforeDraw(chart) {
  //     const ctx = chart.ctx;
  //     const txt = '8 Solar Cleaners';

  //     //Get options from the center object in options
  //     const sidePadding = 60;
  //     const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)

  //     ctx.textAlign = 'center';
  //     ctx.textBaseline = 'middle';
  //     const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
  //     const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);

  //     //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
  //     const stringWidth = ctx.measureText(txt).width;
  //     const elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

  //     // Find out how much the font can grow in width.
  //     const widthRatio = elementWidth / stringWidth;
  //     const newFontSize = Math.floor(30 * widthRatio);
  //     const elementHeight = (chart.innerRadius * 2);

  //     // Pick a new font size so it will not be larger than the height of label.
  //     const fontSizeToUse = Math.min(newFontSize, elementHeight);

  //     ctx.font = fontSizeToUse + 'px Arial';
  //     ctx.fillStyle = 'black';

  //     // Draw text in center
  //     ctx.fillText('8 Solar Cleaners', centerX, centerY);
  //   }
  // }];




// second doughnut 
public doughnutChartLabels_second = ['Normal Voltage', 'Under Voltage'];
  public doughnutChartData_second = [260,100];
  public doughnutChartType_second = 'doughnut';
  public doughnutColor_second: Array<any> = [
    { 
      backgroundColor: ['#0080ff','#ff0000']
    }
  ];

  public doughnutOption_second = {
    legend: {
       position: 'right',
       boxWidth: 10
    },
    cutoutPercentage: 75

 };
//  public doughnutChartPlugins_second: PluginServiceGlobalRegistrationAndOptions[] = [{
//   beforeDraw(chart) {
//     const ctx = chart.ctx;
//     const txt = '8 Solar Cleaners';

//     //Get options from the center object in options
//     const sidePadding = 60;
//     const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)

//     ctx.textAlign = 'center';
//     ctx.textBaseline = 'middle';
//     const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
//     const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);

//     //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
//     const stringWidth = ctx.measureText(txt).width;
//     const elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

//     // Find out how much the font can grow in width.
//     const widthRatio = elementWidth / stringWidth;
//     const newFontSize = Math.floor(30 * widthRatio);
//     const elementHeight = (chart.innerRadius * 2);

//     // Pick a new font size so it will not be larger than the height of label.
//     const fontSizeToUse = Math.min(newFontSize, elementHeight);

//     ctx.font = fontSizeToUse + 'px Arial';
//     ctx.fillStyle = 'black';

//     // Draw text in center
//     ctx.fillText('8 Solar Cleaners', centerX, centerY);
//   }
// }];






 
 // third doughnut chart
 public doughnutChartLabels_third = ['Normal Temp', 'Abnormal Temp'];
 public doughnutChartData_third = [260,0];
 public doughnutChartType_third = 'doughnut';
 public doughnutColor_third: Array<any> = [
   { 
     backgroundColor: ['#0080ff','#0080ff']
   }
 ];

 public doughnutOption_third = {
   legend: {
      position: 'right',
      boxWidth: 10
   },
   cutoutPercentage: 75
  };
//   public doughnutChartPlugins_third: PluginServiceGlobalRegistrationAndOptions[] = [{
//     beforeDraw(chart) {
//       const ctx = chart.ctx;
//       const txt = '8 Solar Cleaners';
  
//       //Get options from the center object in options
//       const sidePadding = 60;
//       const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
  
//       ctx.textAlign = 'center';
//       ctx.textBaseline = 'middle';
//       const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
//       const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
  
//       //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
//       const stringWidth = ctx.measureText(txt).width;
//       const elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
  
//       // Find out how much the font can grow in width.
//       const widthRatio = elementWidth / stringWidth;
//       const newFontSize = Math.floor(30 * widthRatio);
//       const elementHeight = (chart.innerRadius * 2);
  
//       // Pick a new font size so it will not be larger than the height of label.
//       const fontSizeToUse = Math.min(newFontSize, elementHeight);
  
//       ctx.font = fontSizeToUse + 'px Arial';
//       ctx.fillStyle = 'black';
  
//       // Draw text in center
//       ctx.fillText('8 Solar Cleaners', centerX, centerY);
//     }
//   }];

 
 public  lineChartType = 'line';
//  public  lineLabels = ['12:00', '12:10', '12:20', '13:20', '13:30'];
public lineData = [20,21,22,23];
public lineDatasets =[{
  label: 'Temperatures',
  data: [20, 21, 22, 21, 23],
  backgroundColor: 'rgba(75,192,192, 0.4)',
  borderColor: '#4bc0c0',
  pointBackgroundColor: 'black',
  tension: 0,
  fill: false
}];
 
 public lineOption = {
  scales: {
      xAxes: [{
          type: 'time',
          scaleLabel: {
              display: true,
              labelString: 'Time'
          },
          time: {
              unit: 'minute',
              unitStepSize: 10,
              format: "HH:mm",
              displayFormats: {
                  minute: 'HH:mm',
                  hour: 'HH:mm'
              }
          }
      }],
      yAxes: [{
          scaleLabel: {
              display: true,
              labelString: 'Temp'
          },
          ticks: {
              max: 25,
              min: 15,
              stepSize: 1
          }
      }]
  }
};
 
picked : any;
public highlightSelectedRow(row): void
    {
        this.picked = row._id;
        this.router.navigate(['solar1', this.picked]);
    }

 }