import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-btnclick',
  templateUrl: './btnclick.component.html',
  styleUrls: ['./btnclick.component.css']
  })
export class BtnclickComponent {
  userObservable = new Subject<{first: string, last: string}>();
  first = ['John', 'Mike', 'Mary', 'Bob'];
  firstIndex = 0;
  last = ['Smith', 'Novotny', 'Angular'];
  lastIndex = 0;

  nextUser() {
    let first = this.first[this.firstIndex++];
    if (this.firstIndex >= this.first.length) this.firstIndex = 0;
    let last = this.last[this.lastIndex++];
    if (this.lastIndex >= this.last.length) this.lastIndex = 0;
    this.userObservable.next({first, last});
  }
}