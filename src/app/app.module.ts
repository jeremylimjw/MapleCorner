import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './custom-route-reuse-strategy';

import { ChangeTimerDialogComponent } from './timer/change-timer-dialog/change-timer-dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TimerComponent } from './timer/timer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    DateAgoPipe,
    TimerComponent,
    ChangeTimerDialogComponent
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
    MatInputModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
