import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { BtnclickComponent } from './btnclick/btnclick.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { ExmaplesComponent } from './exmaples/exmaples.component';
import { IfelsecomponentComponent } from './ifelsecomponent/ifelsecomponent.component';

const routes: Routes = [
  // { path: 'if-else', component: IfelsecomponentComponent },
  { path: 'aboutus', component: AboutUsComponentComponent },
  { path: 'contact', component: ContactComponentComponent },
  { path: 'example', component: ExmaplesComponent, children: [
    {path:'if-else', component: IfelsecomponentComponent},
    {path:'btnclickfunction', component: BtnclickComponent}

  ]}
  // { path: 'example/if-else', component: IfelsecomponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
