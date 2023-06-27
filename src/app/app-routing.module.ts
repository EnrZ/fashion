import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [

 // { path: '', component: MainPageComponent},
  { path: 'home', component: MainPageComponent},
  { path: 'info', component: InfoComponent}

];

//this change has tobe made for routing to work with angular and ghpages
@NgModule({ imports: [RouterModule.forRoot(routes,{ useHash: true})], exports: [RouterModule], })

export class AppRoutingModule { }
