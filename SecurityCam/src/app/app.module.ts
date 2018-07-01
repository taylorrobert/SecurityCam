import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppContainerComponent } from './modules/shared/app-container/app-container.component';
import { LoginComponent } from './modules/shared/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
