<?php
    require_once("../../config/conexion.php");
    require_once("../../model/getEmpleados.php");

    if($_SERVER['REQUEST_METHOD'] == 'GET')
    {
        $empleado = new Empleado();

        $empleadosDesc = $empleado->getEmpleadosCont();

        echo json_encode($empleadosDesc);
    }
    else
    {
        $error = array('error' => 'Error en la peticion http');

        echo json_encode($error);
    }


?>