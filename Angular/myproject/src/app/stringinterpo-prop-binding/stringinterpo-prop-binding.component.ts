import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stringinterpo-prop-binding',
  templateUrl: './stringinterpo-prop-binding.component.html',
  styleUrls: ['./stringinterpo-prop-binding.component.css']
})
export class StringinterpoPropBindingComponent {
  name = "Testing"
  className = "form-control"
  fontSizePx = 16;
  size = 15;
  username = "";
  errorMsg = "";

  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  opration() {
    // console.log("called");
    
    // console.log(this.username);    
    if (this.username == "TOPS") {
      console.log("Login Success");
      this.errorMsg="Login Success"
      // if (condition) {
        // }elseif(){}else{}
      } else {
      this.errorMsg="Invalid User"
      console.log("Invalid User");
      
    }
  }
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    // this.size = 15+this.size+delta;
    console.log(this.size );
    this.sizeChange.emit(this.size);
  }
}
