function calculerPerimetreEtAire() {
    var rayon = prompt("Entrez la longueur du rayon du cercle :");
   var perimetre = 2 * Math.PI * rayon;
    var aire = Math.PI * Math.pow(rayon, 2);

    alert("Le périmètre du cercle est : " + perimetre + "\nL'aire du cercle est : " + aire);
  }
