import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName = ""
  password = ""
  constructor(private apiServive: ApiService) {
    console.log();
  }
  ngOnInit(): void {
  }
  loginBtnClick(){
    console.log("username : ",this.userName,"password",this.password);
    this.apiServive.loginUserData(this.userName,this.password).subscribe(Res=>{
      console.log("Login compo",Res);
      
    })
  }
}
