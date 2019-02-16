import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ClassesService } from '../services/classes.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})

export class ClassComponent {

  json: any;
  constructor(private breakpointObserver: BreakpointObserver, private school_class_data: ClassesService,private router:Router) {
    console.log("constructor");

  }

  cards: any[];
  ngOnInit() {

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
    this.router.navigate(['/school/class',classId])
  }

}
