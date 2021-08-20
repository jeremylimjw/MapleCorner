import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isOpen: boolean = false;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.isOpen = this.storageService.getIsSidebarOpened();
  }

  toggleSidebar(): void {
    this.storageService.setIsSidebarOpened(!this.isOpen);
    this.isOpen = !this.isOpen;
  }

}
