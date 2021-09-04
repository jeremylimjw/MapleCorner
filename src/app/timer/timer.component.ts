import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { interval, Observable, Subscription } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { ChangeTimerDialogComponent } from './change-timer-dialog/change-timer-dialog.component';

interface Timer {
  initial: { hours: number, minutes: number, seconds: number };
  hours: number;
  minutes: number;
  seconds: number;
  isRunning: boolean;
  isMuted: boolean;
  isLoop: boolean;
  progress: number;
}

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
  alarm!: HTMLAudioElement;

  stopwatch: Stopwatch;
  stopwatch$: Observable<any>;
  stopwatchSubscription!: Subscription;

  constructor(public dialog: MatDialog, private storageService: StorageService) {
    let timerInitial = storageService.getTimer();
    this.timer = { 
      initial: timerInitial,
      hours: timerInitial.hours, minutes: timerInitial.minutes, seconds: timerInitial.seconds, isRunning: false, isMuted: false, isLoop: false, progress: 0
    };
    this.timer$ = interval(1000);

    this.stopwatch = { ...STOPWATCH_TEMPLATE };
    this.stopwatch$ = interval(10);
  }

  ngOnInit(): void { 
    this.alarm = new Audio('assets/alarm.mp3');
  }

  /** Timer logic. */
  timerTick(timer: Timer): void {
    if (timer.seconds === 0) {
      if (timer.minutes === 0) {
        if (timer.hours !== 0) {
          timer.hours--;
          timer.minutes = 59;
          timer.seconds = 59;
        }
      } else {
        timer.minutes--;
        timer.seconds = 59;
      }
    } else {
      timer.seconds--;
    }

    if (timer.seconds === 0 && timer.minutes === 0 && timer.hours === 0) {

      if (!this.timer.isMuted) {
        this.playAlarm();
      }

      if (!timer.isLoop) {
        this.timerSubscription.unsubscribe();
        this.timer.isRunning = false;
      } else {
        /** Reset timer and play again. */
        this.timer.hours = this.timer.initial.hours;
        this.timer.minutes = this.timer.initial.minutes;
        this.timer.seconds = this.timer.initial.seconds;
      }
    }

    timer.progress = (1-(timer.hours*3600+timer.minutes*60+timer.seconds) / (timer.initial.hours*3600+timer.initial.minutes*60+timer.initial.seconds))*100;
  }

  /** If running, stop the timer. Else, start the timer. */
  toggleTimer(): void {
    if (this.timer.isRunning) {
      this.timerSubscription.unsubscribe();
      this.timer.isRunning = false;
    } else {
      this.timerSubscription = this.timer$.subscribe(tick => this.timerTick(this.timer));
      this.timer.isRunning = true;
    }
  }

  resetTimer(): void {
    this.timerSubscription?.unsubscribe();
    this.timer.hours = this.timer.initial.hours;
    this.timer.minutes = this.timer.initial.minutes;
    this.timer.seconds = this.timer.initial.seconds;
    this.timer.progress = 0;
    this.timer.isRunning = false;
  }

  playAlarm(): void {
    this.alarm.currentTime = 0;
    this.alarm.play();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangeTimerDialogComponent, {
      width: '500px',
      data: { initial: {...this.timer.initial } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.seconds >= 60) {
          result.minutes++;
          result.seconds -= 60;
        }
        if (result.minutes >= 60) {
          result.hours++;
          result.minutes -= 60;
        }
        if (result.hours > 99) {
          result.hours = 99;
        }
        this.timer.initial = result;
        this.storageService.setTimer(result);
        this.resetTimer();
      }
    });
  }




  /** Stopwatch logic. */
  stopwatchTick(stopwatch: Stopwatch): void {
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
  }

  /** If running, stop the timer. Else, start the timer. */
  toggleStopwatch(): void {
    if (this.stopwatch.isRunning) { 
      this.stopwatchSubscription.unsubscribe();
      this.stopwatch.isRunning = false;
    } else {
      this.stopwatchSubscription = this.stopwatch$.subscribe(() => this.stopwatchTick(this.stopwatch));
      this.stopwatch.isRunning = true;
    }
  }

  resetStopwatch(): void {
    this.stopwatchSubscription?.unsubscribe();
    this.stopwatch = { ...STOPWATCH_TEMPLATE };
  }




  /** Prompt user to confirm if timer/stopwatch is running. */
  @HostListener('window:beforeunload', ['$event'])
  confirm(e: any) {
    if (this.timer.isRunning || this.stopwatch.isRunning) {
      e.returnValue = 'Your data will be lost!';
    }
  }

  /** Terminate intervals if somehow component destroys. */
  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
    this.stopwatchSubscription?.unsubscribe();
  }

}
