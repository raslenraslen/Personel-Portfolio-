import { Component, OnInit, OnDestroy } from '@angular/core';
import { SideMenuService } from '../side-menu.service'; // Assure-toi du chemin correct
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Ou scss
})
export class HeaderComponent implements OnInit, OnDestroy {
  isSideMenuOpen = false;
  private sideMenuSubscription!: Subscription;

  constructor(private sideMenuService: SideMenuService) { }

  ngOnInit(): void {
    this.sideMenuSubscription = this.sideMenuService.isSideMenuOpen$.subscribe(isOpen => {
      this.isSideMenuOpen = isOpen;
    });
  }

  ngOnDestroy(): void {
    if (this.sideMenuSubscription) {
      this.sideMenuSubscription.unsubscribe();
    }
  }

  openSideMenu() {
    this.sideMenuService.openSideMenu();
  }

  closeSideMenu() {
    this.sideMenuService.closeSideMenu();
  }
}