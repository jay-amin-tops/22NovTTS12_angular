import { Component } from '@angular/core';

@Component({
  selector: 'app-directivesin-ang',
  templateUrl: './directivesin-ang.component.html',
  styleUrls: ['./directivesin-ang.component.css']
})
export class DirectivesinAngComponent {
  public stuff: any[] = [];
  public show: boolean = false;
  public style1:boolean = false
  public style2:boolean = false
  constructor() { 
    // constructor is a method which is invoked by default when componenet is called sinlge time when compo called
  }
  
  ngOnInit() {
    // initilise some value for the component multiple time when compo update
    this.stuff = [
      { name: 'abc', id: 1 },
      { name: 'huo', id: 2 },
      { name: 'bar', id: 3 },
      { name: 'foo', id: 4 },
      { name: 'thing', id: 5 },
      { name: 'other', id: 6 },
    ]
  }

  toggle() {
    this.show = !this.show;
  }

  // log(thing) {
  //   console.log(thing);
  // }
}
