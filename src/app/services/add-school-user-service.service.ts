import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddSchoolUserServiceService {

  constructor(private http: HttpClient) { }

  create_school_user(jsonPostData) {
    return this.http.post('http://127.0.0.1:5000/add_users', jsonPostData)
  }

}
