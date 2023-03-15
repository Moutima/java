<?php

$randomNumber = rand(1, 100);


$result = array('randomNumber' => $randomNumber);


$jsonResult = json_encode($result);


header('Content-Type: application/json');


echo $jsonResult;
?>
