import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router'; // Importe Event as RouterEvent
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-app';
  showHeader = true;

  private routerSubscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.routerSubscription = this.router.events.pipe(
      // Filtre pour ne réagir qu'aux événements de fin de navigation réussie
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd) // Utilise la garde de type
    ).subscribe((event: NavigationEnd) => { // Ici, TypeScript sait que c'est un NavigationEnd grâce au filtre
      const url = event.urlAfterRedirects;

      // Définit la condition pour ne PAS afficher le header sur la page d'accueil
      this.showHeader = url !== '/home';
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}