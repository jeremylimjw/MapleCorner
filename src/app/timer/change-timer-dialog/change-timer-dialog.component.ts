import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  initial: { 
    hours: number, 
    minutes: number, 
    seconds: number 
  }
}

@Component({
  selector: 'app-change-timer-dialog',
  templateUrl: './change-timer-dialog.component.html',
  styleUrls: ['./change-timer-dialog.component.css']
})
export class ChangeTimerDialogComponent implements OnInit {

  inputValue = "";
  editMode: boolean = false;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor(
    public dialogRef: MatDialogRef<ChangeTimerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }

  handleInputChange(newValue: number): void {
    let before = this.inputValue + "";
    let after = newValue + "";
    
    if (before.length === 6 && after.length > 6) {
      this.inputValue = after.slice(1);
    } else {
      this.inputValue = after.padStart(6, "0");
    }

    if (this.inputValue.slice(4,6) != "") {
      this.seconds = parseFloat(this.inputValue.slice(4,6));
    }
    if (this.inputValue.slice(2,4) != "") {
      this.minutes = parseFloat(this.inputValue.slice(2,4));
    }
    if (this.inputValue.slice(0,2) != "") {
      this.hours = parseFloat(this.inputValue.slice(0,2));
    }

  }

}
