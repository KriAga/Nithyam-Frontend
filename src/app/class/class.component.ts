import { Component, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ClassesService } from '../services/classes.service'
import { Router } from '@angular/router';
import { MatGridList } from '@angular/material';
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})

export class ClassComponent {

  json: any;
  constructor(private breakpointObserver: BreakpointObserver,
      private school_class_data: ClassesService,
      private router:Router,
      ) {
    console.log("constructor");

  }
  breakpoint:number;
  cards: any[];
  ngOnInit() {
    this.setBreakpoint(window.innerWidth);
    this.school_class_data.get_school_details().subscribe((data) => {
      this.json = data;

      let classes = [];
      for (var each in this.json["result"]["Classes"]) {
        var eachClass = {};
        eachClass["title"] = each;
        eachClass["count"] = this.json["result"]["Classes"][each];
        classes.push(eachClass);
      }
      console.log(classes);
      classes.sort((a,b)=>{
        let classA =Number(a.title.substring(0,a.title.length-1))
        let SectionA = a.title[a.title.length-1];
        let classB =Number(b.title.substring(0,b.title.length-1))
        let SectionB = b.title[b.title.length-1];
        console.log(classA,SectionA,classB,SectionB)
        if(classA>classB)
          return 1;
        else if(classA<classB)
          return -1;
        else if(SectionA>SectionB)
          return 1;
        else
          return -1;  
      })
      this.cards = classes;
    });
    


  }
  navigate(classId){
    this.router.navigate([this.router.url,classId])
  }
  onResize(event) {
    this.setBreakpoint(event.target.innerWidth);
  }
  setBreakpoint(width){
    if(width<400)
      this.breakpoint =  2;
    else if( width<700)
      this.breakpoint = 3;
    else if( width<1000)
      this.breakpoint = 4;
    else
      this.breakpoint = 5;
  }
}
