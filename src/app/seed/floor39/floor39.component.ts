import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { questions } from './questions';

@Component({
  selector: 'app-floor39',
  templateUrl: './floor39.component.html',
  styleUrls: ['./floor39.component.less']
})
export class Floor39Component implements OnInit {

  searchText = new FormControl('');

  questions = questions;
  filteredQuestions = this.questions.slice();
  displayedColumns: string[] = ['question', 'answers'];

  constructor() { }

  ngOnInit(): void {
    this.searchText.valueChanges.subscribe(searchString => {
      searchString = searchString.trim().replace(/\s/g,'').toLowerCase();
      this.filteredQuestions = this.questions.filter(x => x.matchValue?.includes(searchString));
    })
  }

}
