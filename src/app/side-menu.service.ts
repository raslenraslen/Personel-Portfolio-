import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {
  private _isSideMenuOpen = new BehaviorSubject<boolean>(false);
  isSideMenuOpen$ = this._isSideMenuOpen.asObservable();

  openSideMenu() {
    this._isSideMenuOpen.next(true);
  }

  closeSideMenu() {
    this._isSideMenuOpen.next(false);
  }
}