import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HomeModule } from './home/home.module';

const routes: Routes = [];

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

    HomeModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
