import { Component, OnInit, AfterViewInit } from '@angular/core'; // <-- Importer AfterViewInit et OnInit (utile)

// --- Étape 4: Déclarer les variables globales si nécessaire ---
// Si votre script d'animation utilise jQuery ($), déclarez-le :
declare var $: any;

// Si votre script d'initialisation est une fonction globale nommée par exemple 'initTextAnimation', déclarez-la :
// declare var initTextAnimation: any;

// Si la bibliothèque d'animation est accessible via un objet global, déclarez-le :
// declare var YourTextAnimationLibrary: any; // Remplacez YourTextAnimationLibrary par le nom réel


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit { // <-- Implémenter OnInit et AfterViewInit

  constructor() { }

  // --- Étape 3: Ajouter la méthode ngOnInit (optionnel mais bonne pratique) ---
  // Utilisé pour l'initialisation basée sur les données, pas le DOM
  ngOnInit(): void {
    console.log('HomeComponent initialized');
  }

  // --- Étape 3: Ajouter la méthode ngAfterViewInit() ---
  // Utilisé pour l'initialisation basée sur le DOM
  ngAfterViewInit(): void {
    console.log('HomeComponent View Initialized');

    // --- Étape 5: Appeler le code d'initialisation de l'animation ici ---
    // C'est le moment où l'élément HTML <h1 class="cd-headline clip ..."> est présent dans le DOM.

    // Exemple 1 : Si l'animation s'initialise via jQuery
    // Vérifiez si jQuery ($) est disponible avant de l'utiliser
    if (typeof $ !== 'undefined') {
      // Ciblez l'élément. Assurez-vous que le sélecteur est correct.
      // Le code original dans votre main.js ou text-type.js devrait montrer comment cet élément est ciblé.
      const textAnimationElement = $('.cd-headline.clip');

      if (textAnimationElement.length > 0) {
         console.log('Text animation element found. Attempting to initialize...');

         // --- Copiez ou appelez la logique d'initialisation ici ---
         // Vous devez retrouver le code dans vos scripts assets qui s'occupe de cet élément.
         // Souvent, c'est un appel à une fonction ou une méthode sur l'élément trouvé.

         // EXEMPLE HYPOTHÉTIQUE basé sur des bibliothèques courantes :
         // Si c'est Typed.js :
         // textAnimationElement.typed({
         //   strings: ["Web Designer", "Web Developer", "UI/UX Designer", "Freelancer", "Content Writer"],
         //   typeSpeed: 30,
         //   loop: true
         // });

         // Si c'est une logique personnalisée utilisant les classes is-visible/is-hidden :
         // Vous devrez peut-être reproduire la boucle setInterval ou la fonction qui gère le changement de classes.
          textAnimationElement.each(() => {
              var t = $(this),
                s = t.find('.cd-words-wrapper'),
                n = s.children('b'),
                o = n.length,
                r = 0; // Index du mot visible

              function animateWords() {
                var current = r;
                var next = (r + 1) % o; // Le prochain mot (revient au début après le dernier)

                n.eq(current).removeClass('is-visible').addClass('is-hidden');
                n.eq(next).removeClass('is-hidden').addClass('is-visible');

                r = next; // Mettre à jour l'index du mot visible
              }

              // Lancez l'animation toutes les X millisecondes (par exemple, 2000ms = 2 secondes)
              setInterval(animateWords, 2000); // Ajustez ce délai si votre template utilise un délai différent

              // Assurez-vous que le premier mot a la classe 'is-visible' au début
              n.eq(0).addClass('is-visible');
          });
         // FIN DE L'EXEMPLE HYPOTHÉTIQUE

      } else {
        console.warn('Text animation element .cd-headline.clip not found in DOM.');
      }

    } else {
      console.warn("jQuery is not loaded. Cannot initialize animation.");
    }

    // Exemple 2 : Si l'animation s'initialise via une fonction globale spécifique
    // if (typeof initTextAnimation !== 'undefined') {
    //    // Appelez la fonction, en passant peut-être l'élément si elle en a besoin
    //    const element = document.querySelector('.cd-headline.clip');
    //    if (element) {
    //      initTextAnimation(element); // Ou juste initTextAnimation(); si elle gère la sélection elle-même
    //    }
    // }

  }

  // Ajoutez d'autres méthodes et propriétés ici si nécessaire

}