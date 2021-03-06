import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { StravaComponent } from './strava/strava.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatListModule, MatIconModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatSliderModule, MatExpansionModule, MatSlideToggleModule, MatSnackBarModule, MatDialogModule, MatCardModule, MatMenuModule, MatProgressBarModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../services/auth.guard';
import { StravaImporterComponent } from './strava-importer/strava-importer.component';
import { MatchDetailComponent } from './matches/match-detail/match-detail.component';
import { MatchResolver } from './matches/match-resolver.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchListComponent } from './matches/match-list/match-list.component';
import { JoinDialogComponent, JoinDialog } from './matches/join-dialog/join-dialog.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatchEditComponent } from './matches/match-edit/match-edit.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { MatchChartComponent } from './matches/match-detail/match-chart.component';
import { MenuComponent } from './menu/menu.component';
import { StatsComponent } from './stats/stats.component';
import { MenuService } from './menu/menu.service';
import { MatchCommentsComponent } from './matches/match-detail/match-comments.component';
import { EndomondoLoginComponent } from './login/endomondo-login/endomondo-login.component';
import { EndomondoImporterComponent } from './importer/endomondo-importer/endomondo-importer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatMenuModule,
    MatProgressBarModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      libraries: ['visualization'],
      apiKey: 'AIzaSyAp9Ii0KhgZ435TgTy0JZsMLekx4087Bfg' // SoccerJoin proyect and app
    }),
    RouterModule.forChild([
      {
        path: 'login/strava',
        component: StravaComponent
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'matches/:id/edit',
        component: MatchEditComponent,
        resolve: {
          match: MatchResolver
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'matches/:id',
        component: MatchDetailComponent,
        resolve: {
          match: MatchResolver
        },
        canActivate: []
      },
      {
        path: 'stats',
        component: StatsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'login/endomondo',
        component: EndomondoLoginComponent
      },
      {
        path: 'importer/strava',
        component: StravaImporterComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'importer/endomondo',
        component: EndomondoImporterComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [
    MenuComponent,
    // LoginComponent,
    // StravaComponent
  ],
  declarations: [
    LoginComponent,
    StravaComponent,
    HomeComponent,
    StravaImporterComponent,
    MatchDetailComponent,
    MatchListComponent,
    JoinDialogComponent,
    ToolbarComponent,
    MatchEditComponent,
    MatchChartComponent,
    MenuComponent,
    StatsComponent,
    MatchCommentsComponent,
    EndomondoLoginComponent,
    EndomondoImporterComponent
  ],
  entryComponents: [
    JoinDialogComponent
  ],
  providers: [
    MatchResolver,
    JoinDialog,
    MenuService
  ]
})
export class ScreensModule { }
