import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent {
  user = "Ramesh";
  numbers = [1,2,3,4,5,6,7,8,9];
  days = Days;
  day = Days.SUNDAY;
}

export enum Days {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY
}