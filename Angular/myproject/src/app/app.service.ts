import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
  getUsersData():Observable<any>{
    // console.log("inside get Users Data");
    // let apiData = this.http.get("http://localhost/api/allusers");
    // console.log(apiData);
    
    return this.http.get("http://localhost/api/allusers")
  }
}
