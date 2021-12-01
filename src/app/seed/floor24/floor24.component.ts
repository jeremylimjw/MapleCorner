import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { playlist } from './playlist';

@Component({
  selector: 'app-floor24',
  templateUrl: './floor24.component.html',
  styleUrls: ['./floor24.component.less']
})
export class Floor24Component implements OnInit {
      
  playlist: Track[] = playlist

  constructor() { }

  ngOnInit(): void {
  }

}
