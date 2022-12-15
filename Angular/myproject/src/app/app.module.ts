import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { IfelsecomponentComponent } from './ifelsecomponent/ifelsecomponent.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { ExmaplesComponent } from './exmaples/exmaples.component';
import { BtnclickComponent } from './btnclick/btnclick.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    IfelsecomponentComponent,
    HeadercomponentComponent,
    AboutUsComponentComponent,
    ContactComponentComponent,
    ExmaplesComponent,
    BtnclickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
