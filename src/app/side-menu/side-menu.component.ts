import { Component } from '@angular/core';
import { SideMenuService } from '../side-menu.service'; // Assure-toi du chemin correct

@Component({
  selector: 'app-side-menu', // Le sélecteur de ton nouveau composant sidemenu
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'] // Ou scss
})
export class SideMenuComponent {

  constructor(private sideMenuService: SideMenuService) { }

  // Méthode pour fermer le sidemenu, appelée depuis le HTML de ce composant
  // Cette méthode est nécessaire si ton bouton de fermeture est à l'intérieur du SideMenuComponent
  closeSideMenu() {
    this.sideMenuService.closeSideMenu();
  }
}