import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home/home.component';
import { LoginComponent } from './modules/shared/login/login.component';
import { RegisterComponent } from './modules/shared/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);