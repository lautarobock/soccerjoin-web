import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatListModule, MatIconModule } from '@angular/material';
import { LoginComponent } from './home/login/login.component';
import { FooterComponent } from './home/footer/footer.component';
import { StravaComponent } from './home/strava/strava.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    StravaComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      libraries: ['visualization'],
      apiKey: 'AIzaSyAp9Ii0KhgZ435TgTy0JZsMLekx4087Bfg' // SoccerJoin proyect and app
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login/strava', component: StravaComponent}
      // { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
      // { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
