import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppSearchScreenComponent } from './app-search-screen/app-search-screen.component';
import {AppRoutingModule} from '../app/app.route';
import {gifService} from '../app/services/gif.service';

@NgModule({
  declarations: [
    AppComponent,
    AppSearchScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [gifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
