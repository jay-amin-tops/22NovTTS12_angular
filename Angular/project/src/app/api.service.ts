import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  loginUserData(uname:any,pass:any):Observable<any>{
    console.log("called inside ",uname);
    
    return this.http.post("http://localhost/api/login",{username:uname,password:pass})
  }
  // loginUserData(uname:any,pass:any){
  //   console.log("called inside ",uname,pass);
    
  //   // return this.http.post("http://localhost/api/allusers")
  // }
}
