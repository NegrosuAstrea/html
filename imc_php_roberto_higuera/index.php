<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IMC php</title>
</head>
<body>
    
    <h1>Calculo del IMC</h1>
    <form action="#" method = "GET">

        <label>Peso en kg: </label>
        <input type="text" name="peso" id="peso">
        <br><br>
        <label>Altura en m: </label>
        <input type="text" name="altura" id="altura">
        <br><br>
        <input type="submit" name="procesar" value="Procesar">

    </form>

    <?php

        if(isset($_GET["procesar"])){
            $peso_v = $_GET["peso"];
            $altura_v = $_GET["altura"];
            $imc = $peso_v / pow($altura_v, 2);

            echo "<h2> Su IMC es: " . $imc . ". Usted se encuentra clasificado en: </h2>";

            if ($imc < 18.5){
                echo "<h2>Peso insuficiente </h2>";
            }else if ($imc < 24.9){
                echo "<h2> Peso normal </h2>";
            }else if ($imc < 26.9){
                echo "<h2> Sobrepeso grado I </h2>";
            }else if ($imc < 29.9){
                echo "<h2> Sobrepeso grado II<h2>";
            }else if ($imc < 34.9){
                echo "<h2> Obesidad tipo I <h2>";
            }else if ($imc < 39.9){
                echo "<h2> Obesidad tipo II <h2>";
            }else if ($imc < 49.9){
                echo "<h2> Obesidad tipo III <h2>";
            }else{
                echo "<h2>Obesidad tipo IV <h2>";
            }

        }

    ?>

</body>
</html>