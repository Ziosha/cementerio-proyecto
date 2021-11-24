<?php
    require_once("../../config/conexion.php");
    require_once("../../model/getDifuntos.php");

    if($_SERVER['REQUEST_METHOD'] == 'GET')
    {
        $difuntos = new Difunto();

        $nichos = $difuntos->getNichos();

        echo json_encode($nichos);
    }
    else
    {
        $error = array('error' => 'Error en la peticion http');

        echo json_encode($error);
    }
?>