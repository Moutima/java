// Déclaration des variables globales
var a = 3;
var b = 2;

// Définition de la fonction multiplie avec une valeur par défaut pour x
function multiplie(x = 8) {
  return x * 3;
}

// Définition de la fonction affiche
function affiche() {
  // Calcul et affichage du résultat de multiplie(a)
  alert("Le résultat de multiplie(a) est : " + multiplie(a));

  // Calcul et affichage du résultat de multiplie(b)
  alert("Le résultat de multiplie(b) est : " + multiplie(b));

  // Calcul et affichage du résultat de multiplie() sans paramètre
  alert("Le résultat de multiplie() est : " + multiplie());
}

