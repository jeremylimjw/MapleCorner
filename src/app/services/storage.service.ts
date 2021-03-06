import { Injectable } from '@angular/core';
import { History, Time } from '../models';

const SIDEBAR_KEY = "isSideBarOpened";
const COUNTER_KEY = "counter";
const HISTORYS_KEY = "historys";
const TIMER_KEY = "timer";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getIsSidebarOpened(): boolean {
    let value = this.getFromLocalStorage(SIDEBAR_KEY);
    if (value === null) {
      value = false;
      this.setToLocalStorage(SIDEBAR_KEY, value);
    }
    return value;
  }

  setIsSidebarOpened(value: boolean): void {
    this.setToLocalStorage(SIDEBAR_KEY, value);
  }

  getCounter(): number {
    let value = +this.getFromLocalStorage(COUNTER_KEY);
    if (value === null) {
      value = 0;
      this.setToLocalStorage(COUNTER_KEY, value);
    }
    return value;
  }

  setCounter(value: number): void {
    this.setToLocalStorage(COUNTER_KEY, value);
  }

  getHistorys(): History[] {
    let value = this.getFromLocalStorage(HISTORYS_KEY);
    if (value === null) {
      value = [];
      this.setToLocalStorage(HISTORYS_KEY, value);
    }

    value = value.map((history: History) => {
      return {
        text: history.text,
        date: new Date(history.date)
      }
    })
    return value;
  }

  setHistorys(historys: History[]): void {
    this.setToLocalStorage(HISTORYS_KEY, historys);
  }

  getTimer(): Time {
    let value = this.getFromLocalStorage(TIMER_KEY);
    if (value === null) {
      value = { hours: 0, minutes: 5, seconds: 0 };
      this.setToLocalStorage(TIMER_KEY, value);
    }

    return value;
  }

  setTimer(timer: Time): void {
    this.setToLocalStorage(TIMER_KEY, timer);
  }

  private getFromLocalStorage(key: string): any | null {
    const value = window.localStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  }

  private setToLocalStorage(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}
