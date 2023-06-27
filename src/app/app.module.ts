import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MainPageComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
