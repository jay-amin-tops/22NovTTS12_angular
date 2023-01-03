import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formexample',
  templateUrl: './formexample.component.html',
  styleUrls: ['./formexample.component.css']
})
export class FormexampleComponent {
  favoriteColorControl = new FormControl('');  
  favoriteColor = '';  

  constructor() {
    console.log(this.favoriteColorControl);
  }
  ngOnInit(): void {
  }
}
