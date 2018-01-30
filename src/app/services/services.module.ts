import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Session } from './session.service';
import { UsersService } from './users.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { MatchesService } from './matches.service';
import { AuthInterceptorService } from './auth-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  // exports: [Session, UsersService],
  providers: [
    Session,
    UsersService,
    AuthGuard,
    MatchesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class ServicesModule { }
