import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<StudentsItem>;
  allAttendees:any[];
  displayedColumns = ["StudentId", "StudentName","ClassId" ];
  constructor(private attendanceService:AttendanceService,private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.allAttendees=[];
    this.attendanceService.getMarkedAttendance().subscribe((response)=>{
      if(response["status"] == "200"){
        console.log(response["result"])
        this.allAttendees = response["result"];
        this.dataSource = new MatTableDataSource(this.allAttendees);
      }
    })
    this.attendanceService.getLiveAttendance().subscribe((student)=>{
      console.log(student);
      this.allAttendees.unshift(student);
      console.log(this.allAttendees);
      this.cd.detectChanges();    
      this.dataSource = null;
      this.dataSource = new MatTableDataSource(this.allAttendees);
      this.dataSource.sort = this.sort;
      console.log(this.dataSource)
    })
  }

}
export interface StudentsItem {
  StudentId: number;
  StudentName: string;
  ClassId:string;
}