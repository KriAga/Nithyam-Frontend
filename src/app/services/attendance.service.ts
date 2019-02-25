import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Urls } from '../url'

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private socket;    
  private url = Urls.baseUrl;
  constructor(private http:HttpClient) { 
    this.socket = io(this.url);
  }
  public TestConnection(){
      this.socket.emit('my_event',"Test");
  }
  public getLiveAttendance(){
    return Observable.create((observer)=>{
      this.socket.on('send_presenties',(responseString)=>{
        console.log(responseString)
        let response = JSON.parse(responseString)
        console.log("service",response.result)
        observer.next(response.result);
      })
    })
  }

  public getMarkedAttendance(){
    return this.http.get(Urls.baseUrl+"initial_attendance");
  }
}
