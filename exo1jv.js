function calculerRectangle() {
    const longueur = prompt("Entrez la longueur du rectangle :");
    const largeur = prompt("Entrez la largeur du rectangle :");
  
    const perimetre = 2 * (Number(longueur) + Number(largeur));
    const aire = Number(longueur) * Number(largeur);
  
    alert("Le périmètre du rectangle est : " + perimetre + "\n" +
          "L'aire du rectangle est : " + aire);
  }