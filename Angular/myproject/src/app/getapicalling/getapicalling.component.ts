import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-getapicalling',
  templateUrl: './getapicalling.component.html',
  styleUrls: ['./getapicalling.component.css']
})
export class GetapicallingComponent {
  constructor(private apiServive: AppService) { }
  ngOnInit(): void {
    this.apiServive.getUsersData().subscribe(Res=>{
      console.log("Login compo",Res);
      
    })
  }
}
