import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { StudentsDataSource } from './students-datasource';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../services/students.service'
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<StudentsItem>;
  public loading:Boolean=true;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'Name', 'Gender','TotalDays','TotalPresent','TotalAbsent', 'TotalHolidays','TotalNotAvailable' ];
  constructor(private route: ActivatedRoute,private studentsService:StudentsService,private cd: ChangeDetectorRef) { 
    this.dataSource = new MatTableDataSource();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
  id:any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');  
    this.studentsService.getStudentsDetails(this.id).subscribe((data)=>{
      console.log(data);
      let students=[]
      for (var each in data["result"]){
        let eachStudent={};
        eachStudent["id"]= each;
        eachStudent["Name"] = data["result"][each]["Name"];
        eachStudent["Gender"] = data["result"][each]["Gender"];
        let AttendanceSummary = data["result"][each]["AttendanceSummary"];
        for(let key of ["A","H","P","N"])
          if(!AttendanceSummary[key])
            AttendanceSummary[key]=0;

        eachStudent["TotalDays"] = AttendanceSummary["N"]
                                  +AttendanceSummary["H"] 
                                  +AttendanceSummary["P"] ;
                                  +AttendanceSummary["A"] 
        eachStudent["TotalPresent"] = AttendanceSummary["P"];
        eachStudent["TotalAbsent"] = AttendanceSummary["A"];
        eachStudent["TotalHolidays"] = AttendanceSummary["H"];
        eachStudent["TotalNotAvailable"] = AttendanceSummary["N"];
        students.push(eachStudent);
      }
      console.log(students);
      this.loading = false;
      this.cd.detectChanges();
      this.dataSource = new MatTableDataSource(students);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    })
    
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
export interface StudentsItem {
  id: number;
  Name: string;
  Gender: string;
  TotalDays: number;
  TotalPresent: number;
  TotalAbsent: number;
  TotalHolidays: number;
  TotalNotAvailable: number;
}