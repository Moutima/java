 // Définition du tableau
 var tab = [-2, 1, 4];

 // Définition de la fonction additionne
 function additionne(x) {
   return x + 2;
 }

 // Définition de la fonction affiche
 function affiche() {
   // Récupération des éléments du tableau
   var premierElement = tab[0];
   var dernierElement = tab[tab.length - 1];

   // Calcul des résultats de la fonction additionne
   var resultat1 = additionne(premierElement);
   var resultat2 = additionne(dernierElement);

   // Affichage des résultats dans des boîtes d'alerte
   alert(resultat1);
   alert(resultat2);
 }
 