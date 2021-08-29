import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

interface Timer {
  hours: number;
  minutes: number;
  seconds: number;
  isRunning: boolean;
  isMuted: boolean;
  isLoop: boolean;
}
const TIMER_TEMPLATE = { hours: 0, minutes: 0, seconds: 0, isRunning: false, isMuted: false, isLoop: false };

interface Stopwatch {
  hours: number;
  minutes: number;
  seconds: number;
  miliseconds: number;
  isRunning: boolean;
}
const STOPWATCH_TEMPLATE = { hours: 0, minutes: 0, seconds: 0, miliseconds: 0, isRunning: false };

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  timer: Timer;
  timer$: Observable<any>;
  timerSubscription!: Subscription;

  stopwatch: Stopwatch;
  stopwatch$: Observable<any>;
  stopwatchSubscription!: Subscription;

  constructor() {
    this.timer = TIMER_TEMPLATE;
    this.timer$ = interval(1000).pipe(
      map(() => {
        const timer = this.timer;
        let total = timer.hours*3600 + timer.minutes*60 + timer.seconds;
      })
    );

    this.stopwatch = { hours: 0, minutes: 0, seconds: 0, miliseconds: 0, isRunning: false };
    this.stopwatch$ = interval(10).pipe(
      map(() => {
        const stopwatch = this.stopwatch;
        if (stopwatch.miliseconds + 1 == 100) {
          if (stopwatch.seconds + 1 == 60) {
            if (stopwatch.minutes + 1 == 60) {
              stopwatch.hours++;
              stopwatch.minutes = 0;
            } else {
              stopwatch.minutes++;
              stopwatch.seconds = 0;
            }
          } else {
            stopwatch.seconds++;
            stopwatch.miliseconds = 0;
          }
        } else {
          stopwatch.miliseconds++;
        }
      })
    );
  }

  ngOnInit(): void { }

  toggleTimer(): void {
    /** If running, stop the timer. Else, start the timer. */
    if (this.timer.isRunning) {
      this.timerSubscription.unsubscribe();
      this.timer.isRunning = false;
    } else {
      this.timerSubscription = this.timer$.subscribe();
      this.timer.isRunning = true;
    }
  }

  resetTimer(): void {
    this.timerSubscription?.unsubscribe();
    this.timer = TIMER_TEMPLATE;
  }

  toggleStopwatch(): void {
    /** If running, stop the timer. Else, start the timer. */
    if (this.stopwatch.isRunning) { 
      this.stopwatchSubscription.unsubscribe();
      this.stopwatch.isRunning = false;
    } else {
      this.stopwatchSubscription = this.stopwatch$.subscribe();
      this.stopwatch.isRunning = true;
    }
  }

  resetStopwatch(): void {
    this.stopwatchSubscription?.unsubscribe();
    this.stopwatch = STOPWATCH_TEMPLATE;
  }

  ngOnDestroy(): void {
    /** Terminate intervals on page leave. */
    this.timerSubscription?.unsubscribe();
    this.stopwatchSubscription?.unsubscribe();
  }

}
