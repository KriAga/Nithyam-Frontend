import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ClassesService } from '../services/classes.service'
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})

export class ClassComponent {

  json: any;
  constructor(private breakpointObserver: BreakpointObserver, private school_class_data: ClassesService) {
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
      this.cards = classes;
    });


  }

}
