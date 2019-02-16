import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http: HttpClient) { }
  get_school_details() {
    var requestData={
      "SchoolId":1
    }
    return this.http.post('http://127.0.0.1:5000/get_all_classes_of_school', requestData)
  }
}
