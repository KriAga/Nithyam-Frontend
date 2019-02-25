import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Urls } from '../url'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { 
  }
  getAttendanceSummary(){
      return this.http.post(Urls.baseUrl+"get_all_attendance",{
        "SchoolId":33030600402
      })
  }
}
