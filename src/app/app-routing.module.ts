import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeedComponent } from './seed/seed.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'seed', component: SeedComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
