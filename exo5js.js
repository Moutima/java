// fonction pour remplir le tableau avec les carrés des indices
function boucle() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
      arr.push(i*i);
    }
    alert(arr);
  }
  
  // fonction pour remplir le tableau avec les carrés des indices, la longueur étant demandée à l'utilisateur
  function boucle2() {
    var n = parseInt(prompt("Entrez la longueur du tableau :"));
    var arr = [];
    for (var i = 0; i < n; i++) {
      arr.push(i*i);
    }
    alert(arr);
  }
  