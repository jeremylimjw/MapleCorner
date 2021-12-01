import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DateAgoPipe } from './pipes/date-ago.pipe';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { MatTableModule } from '@angular/material/table';

import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './custom-route-reuse-strategy';

import { ChangeTimerDialogComponent } from './timer/change-timer-dialog/change-timer-dialog.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TimerComponent } from './timer/timer.component';
import { SeedComponent } from './seed/seed.component';
import { Floor24Component } from './seed/floor24/floor24.component';
import { Floor39Component } from './seed/floor39/floor39.component';
import { Floor47Component } from './seed/floor47/floor47.component';
import { Floor23Component } from './seed/floor23/floor23.component';
import { Floor42Component } from './seed/floor42/floor42.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    DateAgoPipe,
    TimerComponent,
    ChangeTimerDialogComponent,
    SeedComponent,
    Floor23Component,
    Floor24Component,
    Floor39Component,
    Floor42Component,
    Floor47Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    MatProgressBarModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    NgxAudioPlayerModule,
    MatTableModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
