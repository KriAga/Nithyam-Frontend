import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { StudentsDataSource } from './students-datasource';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: StudentsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'Name', 'Gender','TotalDays','TotalPresent','TotalAbsent', 'TotalHolidays','TotalNotAvailable' ];
  constructor(private route: ActivatedRoute) { }
  id:any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataSource = new StudentsDataSource(this.paginator, this.sort);
  }
}
