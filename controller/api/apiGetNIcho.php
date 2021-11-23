<?php
    require_once("../../config/conexion.php");
    require_once("../../model/getDifuntos.php");

    if($_SERVER['REQUEST_METHOD'] == 'GET')
    {
        $difuntos = new Difunto();

        $nicho = $difuntos->getNichos(1);

        echo json_encode($nicho);
    }
    else
    {
        $error = array('error' => 'Error en la peticion http');

        echo json_encode($error);
    }



    
    


?>