import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { BtnclickComponent } from './btnclick/btnclick.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { DirectivesinAngComponent } from './directivesin-ang/directivesin-ang.component';
import { ExmaplesComponent } from './exmaples/exmaples.component';
import { ForloopComponent } from './forloop/forloop.component';
import { FormexampleComponent } from './formexample/formexample.component';
import { GetapicallingComponent } from './getapicalling/getapicalling.component';
import { IfelsecomponentComponent } from './ifelsecomponent/ifelsecomponent.component';
import { LoginComponent } from './login/login.component';
import { PipesComponent } from './pipes/pipes.component';
import { StringinterpoPropBindingComponent } from './stringinterpo-prop-binding/stringinterpo-prop-binding.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';

const routes: Routes = [
  // { path: 'if-else', component: IfelsecomponentComponent },
  { path: 'aboutus', component: AboutUsComponentComponent },
  { path: 'contact', component: ContactComponentComponent },
  { path: 'example', component: ExmaplesComponent, children: [
    {path:'if-else', component: IfelsecomponentComponent},
    {path:'btnclickfunction', component: BtnclickComponent},
    {path:'stringinterpropbinding', component: StringinterpoPropBindingComponent},
    {path:'swicthcase', component: SwitchCaseComponent},
    {path:'directives', component: DirectivesinAngComponent},
    {path:'pipes', component: PipesComponent},
    {path:'formexample', component: FormexampleComponent},
    {path:'getapiexample', component: GetapicallingComponent},
    {path:'login', component: LoginComponent},

  ]}
  // { path: 'example/if-else', component: IfelsecomponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
