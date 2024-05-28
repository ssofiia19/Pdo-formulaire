<?php
try{
$conexion = new PDO("mysql:host=localhost;dbname=Afip_mi1","root","root");
}
catch(PDOException $ex){
die("Erreur de conexion");
}
if($_POST){
    $ins = $conexion->prepare("INSERT INTO users SET user_email=?, user_firstname=?,user_lastname=?");
    $ins->execute([$_POST['email'], $_POST['psw'],$_POST['psw-repeat']]);
}

else{
    die("Erreur de conexion"); 
}


