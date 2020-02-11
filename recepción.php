<!doctype html>
<html lang="es">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> 
<title>¡Gracias!</title>
</head>
<body style = "background-image: url('fondo.webp'); height: 100%; background-position: center; background-repeat: no-repeat; background-size: cover;">
<h1 style = "text-align: right;">¡Gracias por su mensaje!</h1>
<?php
$empresa = test_input($_POST["empresa"]);
$email = test_input($_POST["email"]);
$mensaje = test_input($_POST["mensaje"]); 
$to = "info@mauricio-alessandrello.dx.am";
$email_body = "Recibiste un mensaje de $email: $mensaje";
mail($to, "mensaje de $empresa", $email_body); 

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
</body>
</html>