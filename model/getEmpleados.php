<?php
    class Empleado extends Conectar
    {
        public function getEmpleadosDesc()
        {
            $conecta = parent::Conexion();
            parent::SetNames();

            $query = "SELECT Nombres,ApellidoP,ApellidoM,Descri,Cargo,Celular
                      FROM empleados";

            $sentencia=$conecta->prepare($query);
            $sentencia->execute(array());

            $resultado=$sentencia->fetchAll(PDO::FETCH_ASSOC);
            $sentencia->closeCursor();

            $conecta = null;

            return $resultado;
        }

        public function getEmpleadosCont()
        {
            $conecta = parent::Conexion();
            parent::SetNames();

            $query = "SELECT CI,Nombres,ApellidoP,ApellidoM,Celular
                      FROM empleados";

            $sentencia=$conecta->prepare($query);
            $sentencia->execute(array());

            $resultado=$sentencia->fetchAll(PDO::FETCH_ASSOC);
            $sentencia->closeCursor();

            $conecta = null;

            return $resultado;
        }
    }
?>