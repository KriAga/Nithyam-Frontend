import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Urls } from "../url"
@Injectable({ 
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }
  getStudentsDetails(classId:string){
      return this.http.post(Urls.baseUrl+"get_all_students_of_class",{
          "SchoolId":33030600402,
          "ClassId":classId
      })
  }
}
