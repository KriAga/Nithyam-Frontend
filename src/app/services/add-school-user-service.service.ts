import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Urls } from "../url"

@Injectable({
  providedIn: 'root'
})
export class AddSchoolUserServiceService {

  constructor(private http: HttpClient) { }

  create_school_user(jsonPostData) {
    return this.http.post(Urls.baseUrl+'add_users', jsonPostData)
  }

}
