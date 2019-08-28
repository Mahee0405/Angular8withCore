import { BrowserModule, } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { BsDropdownModule } from 'ngx-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from 'src/nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from './_services/auth.service';
import { ErrorInterceptorProvider } from './_services/error-interceptor.service';
import { AlertifyService } from './_services/alertyfy.service';
import { AuthGuard } from './_guard/auth.guard';
import { UserService } from './_services/user.service';
import { MemberDetailResolver } from './_resolver/member-details.resolver';
import { MemberListResolver } from './_resolver/member-list.resolver';



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
    BsDropdownModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        whitelistedDomains: ['localhost:44352'],
        blacklistedRoutes: ['localhost:44352/api/auth/']
      }
    }),
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService,
    MemberDetailResolver,
    MemberListResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
