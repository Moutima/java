<?php
 //page de traitement de l'appel API depuis un code javascript
 //je vais juste retourner un chiffre aléatoire
 // mais je pourrais récupérer des données POST OU GET
 // je pourrais faire des actions metier ( exemple des calculs pour mon appli)
 //je pourrais faire des actions sur ma BDD
 $retour[0] = rand(0,100);
 //il est preferable de retourner un string compatible JSON qui sera encodé via la

 echo json_encode($retour);
?>





<?php

$randomNumber = rand(1, 100);

$response = array(
    'randomNumber' => $randomNumber
);

header('Content-Type: application/json');
echo json_encode($response);

?>