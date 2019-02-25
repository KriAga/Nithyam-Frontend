import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{
  @ViewChild(BaseChartDirective) ng2chart: BaseChartDirective;
  ngOnInit(){
    this.dashboardService.getAttendanceSummary().subscribe((data:any)=>{
      //console.log(data);
      let ArrayObj=Object.values(data.result)
      let acc = ArrayObj[0];
      for(let i=1;i<ArrayObj.length;i++){
        let curr = ArrayObj[i];
        acc = this.merge(acc,curr);
      }
      console.log(acc)
      var sortedAcc={}
      Object.keys(acc).sort((a,b)=>{
        var dateParts = a.split("/");
        let dateA = new Date(Number(dateParts[2]),Number(dateParts[1]) - 1,Number(dateParts[0]));
        dateParts = b.split("/");
        let dateB = new Date(Number(dateParts[2]),Number(dateParts[1]) - 1,Number(dateParts[0]));
        return dateA.getTime() - dateB.getTime()
      }).forEach(function(key) {
        console.log(key)
        sortedAcc[key] = acc[key];
      });
      console.log(sortedAcc)
      this.lineChartData = this.formatData(sortedAcc);
      console.log(this.lineChartData)
      this.refresh_chart();
    })
  }
  constructor(private dashboardService:DashboardService){

  }
  formatData(data:any){
    let series=[];
    series["A"]={
      "data":[],
      "label":"Absents"
    };
    series["P"]={
      "data":[],
      "label":"Presents"
    };
    for(let date in data){
      series["A"]["data"].push({
        "x":date,
        "y":data[date]["A"]
      })
      series["P"]["data"].push({
        "x":date,
        "y":data[date]["P"]
      })
    }
    return (Object.values(series))
  }
  merge(a, b) {
    var cache = {};
    cache = this.unpackObject(a, cache);
    cache = this.unpackObject(b, cache);
    return cache
  }
  is_object(mixed_var) {
    if (Object.prototype.toString.call(mixed_var) === '[object Array]') {
        return false;
    }
    return mixed_var !== null && typeof mixed_var == 'object';
  }
  unpackObject(a, cache) {
    for (let prop in a) {
        if (a.hasOwnProperty(prop)) {
            if (cache[prop] === undefined) {
                cache[prop] = a[prop];
            } else {
                if (typeof cache[prop] === typeof a[prop]) {
                    if (this.is_object(a[prop])) {
                        cache[prop] = this.merge(cache[prop], a[prop]);
                    } else {
                        cache[prop] += a[prop];
                    }
                }
            }
        }
    }
    return cache;
  }
  public lineChartData:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true,
    scales: {
      xAxes: [{
        stacked:true,
        type: "time",
        time: {
          format: 'DD/MM/YYYY',
          tooltipFormat: 'll'
        },
        scaleLabel: {
          display: true,
          labelString: 'Date'
        }
      }],
      yAxes:[{
        stacked:true
      }]
    }
  };
  refresh_chart(){
    this.ng2chart.ngOnDestroy();
    this.ng2chart.datasets = this.lineChartData;
    this.ng2chart.chart = this.ng2chart.getChartBuilder(this.ng2chart.ctx);
  }
  public lineChartColors: Array<any> = [
    { // blue
      backgroundColor: 'rgba(136 , 188, 238,0.7)',
      borderColor: 'rgba(124, 181, 236,1)',
      pointBackgroundColor: 'rgba(124, 181, 236,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(124, 181, 236,0.8)'
    },
    { // blue
      backgroundColor: 'rgba(124, 181, 236,0.7)',
      borderColor: 'rgba(124, 181, 236,1)',
      pointBackgroundColor: 'rgba(124, 181, 236,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(124, 181, 236,0.8)'
    }, { // blue
      backgroundColor: 'rgba(124, 181, 236,0.7)',
      borderColor: 'rgba(124, 181, 236,1)',
      pointBackgroundColor: 'rgba(124, 181, 236,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(124, 181, 236,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'bar';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
