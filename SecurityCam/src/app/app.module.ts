import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './helpers/fakeBackEndInterceptor';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './directives/alert/alert.component';
import { AuthGuard } from './guards/auth.guard';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { AlertService } from './service/alert.service';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { HomeComponent } from './modules/home/home/home.component';
import { LoginComponent } from './modules/shared/login/login.component';
import { RegisterComponent } from './modules/shared/register/register.component';
import { AppContainerComponent } from './modules/shared/app-container/app-container.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AppContainerComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }