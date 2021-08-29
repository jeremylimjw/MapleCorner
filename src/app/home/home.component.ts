import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { History } from '../models';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  counter: FormControl = new FormControl(0);
  spinnerValue: number = 0;
  historys: History[] = [];
  today: Date = new Date();
  interval!: Subscription;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    /** Update the spinner progress when counter value changes. */
    this.counter.valueChanges.subscribe(value => {
      this.spinnerValue = value / 30 * 100;
    })

    this.counter.setValue(this.storageService.getCounter());
    this.historys = this.storageService.getHistorys();

    /** Update 'today' variable if a new day passes. */
    this.interval = interval(60*1000).subscribe(() => {
      const now = new Date();
      if (now.toDateString() !== this.today.toDateString()) {
        this.today = now;
      }
    })
  }

  ngOnDestroy(): void {
    /** Terminate interval on page leave. */
    this.interval.unsubscribe();
  }

  /** Increment counter by i */
  increment(i: number): void {
    this.setCounter(+this.counter.value + i)
    this.addToHistory({ text: `+${i}`, date: new Date()})
  }

  /** Reset the counter and historys. */
  reset(): void {
    this.setCounter(0);
    this.resetHistorys();
  }

  /** Blur the counter input box when user keys in Enter. */
  handleEnterEvent(e: any): void {
    e.target.blur();
  }

  /** Triggered after the user loses focus of the counter input box. */
  handleBlurEvent(): void {
    const prevValue: number = this.storageService.getCounter();
    const newValue: number = parseFloat(this.counter.value);

    /** If new counter value does not contain any number */
    if (isNaN(newValue)) {
      this.counter.setValue(prevValue);
      return;
    }
    
    this.counter.setValue(newValue); // Remove any strings in counter value

    /** Only save new counter value if there is a difference. */
    if (prevValue !== newValue) {
      this.storageService.setCounter(newValue);
      
      const diff = newValue - prevValue;
      if (diff > 0) {
        this.addToHistory({ text: `+${diff}`, date: new Date()});
      } else {
        this.addToHistory({ text: `${diff}`, date: new Date()});
      }
    }
  }

  private setCounter(value: number): void {
    this.counter.setValue(value);
    this.storageService.setCounter(value);
  }

  private addToHistory(history: History): void {
    this.historys.push(history);
    this.storageService.setHistorys(this.historys);
  }

  private resetHistorys(): void {
    this.historys = [];
    this.storageService.setHistorys([]);
  }

}
