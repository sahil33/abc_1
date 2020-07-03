import { Component, OnInit ,Inject} from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';
import * as Chart from 'chart.js';
import { Device} from '../shared/device';
import { DevicesService } from '../services/devices.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  devices: Device[];
  constructor(private devicesService: DevicesService,
    @Inject('BaseURL') private BaseURL) { }
  
  ngOnInit(): void {
    this.devicesService.getDevices()
    .subscribe(devices => this.devices = devices);
    console.log(this.devices);
     }

     displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


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
 }