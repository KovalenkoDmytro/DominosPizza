<?php

header("Access-Control-Allow-Origin: *");



$dataBase = fopen('products.txt', 'r');
$contents = fread($dataBase, filesize('products.txt'));

echo($contents);


?>


