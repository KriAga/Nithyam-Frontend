import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-promote-students',
  templateUrl: './promote-students.component.html',
  styleUrls: ['./promote-students.component.scss']
})
export class PromoteStudentsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  classId:string;
  ngOnInit() {
    this.classId = this.route.snapshot.paramMap.get('id');  
  }

}
