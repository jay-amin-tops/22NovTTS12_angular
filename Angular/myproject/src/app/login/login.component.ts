import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private apiServive: AppService) { }
  ngOnInit(): void {
    this.apiServive.getUsersData().subscribe(Res=>{
      console.log("Login compo",Res);
      
    })
  }
}
