import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { BsDropdownModule } from 'ngx-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from 'src/nav/nav.component';

import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error-interceptor.service';
import { AlertifyService } from './_services/alertyfy.service';
import { AuthGuard } from './_guard/auth.guard';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      SharedModule,
      BsDropdownModule.forRoot()
   ],
   providers: [
      AuthService, ErrorInterceptorProvider, AlertifyService , AuthGuard,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
