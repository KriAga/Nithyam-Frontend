import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Urls } from '../url'
@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http: HttpClient) { }
  get_school_details() {
    console.log("passing");
    var requestData={
      "SchoolId":33030600402
    }
    return this.http.post(Urls.baseUrl+'get_all_classes_of_school', requestData)
  }
}
