<?php
    class Difunto extends Conectar
    {
        private function getPropNicho($idNicho)
        {
            $conecta = parent::Conexion();
            parent::SetNames();

            $query = "SELECT Propietario FROM nichos
                      WHERE IdN = $idNicho";

            $sentencia=$conecta->prepare($query);
            $sentencia->execute(array());

            $resultado=$sentencia->fetch(PDO::FETCH_ASSOC);
            $sentencia->closeCursor();

            $resultadoProp = $resultado['Propietario'];

            $conecta = null;

            return $resultadoProp;
        }

        private function getEstNicho($idNicho)
        {
            $conecta = parent::Conexion();
            parent::SetNames();

            $query = "SELECT Estado FROM nichos
                      WHERE IdN = $idNicho";

            $sentencia=$conecta->prepare($query);
            $sentencia->execute(array());

            $resultado=$sentencia->fetch(PDO::FETCH_ASSOC);
            $sentencia->closeCursor();

            $resultadoEst = $resultado['Estado'];

            $conecta = null;

            return $resultadoEst;
        }

        private function getCremNicho($idNicho)
        {
            $conecta = parent::Conexion();
            parent::SetNames();

            $arrCremados = array();

            for($i=1;$i<=5;$i++)
            {
                $query = "SELECT Nombres, ApellidoP, ApellidoM, difuntos.Estado, FechaDef
                          FROM difuntos
                          INNER JOIN nichos
                          ON difuntos.IdF = nichos.Cen".$i.
                          " WHERE IdN=$idNicho";

                $sentencia=$conecta->prepare($query);
                $sentencia->execute(array());

                $resultado=$sentencia->fetch(PDO::FETCH_ASSOC);
                $sentencia->closeCursor();   
                
                $arrCremados[] = $resultado;
            }

            $conecta = null;

            return $arrCremados;
        }

        private function getSarcNicho($idNicho)
        {
            $conecta = parent::Conexion();
            parent::SetNames();

            $arrEnterrados = array();

            for($i=1;$i<=3;$i++)
            {
                $query = "SELECT Nombres, ApellidoP, ApellidoM, difuntos.Estado, FechaDef
                          FROM difuntos
                          INNER JOIN nichos
                          ON difuntos.IdF = nichos.Sar".$i.
                          " WHERE IdN=$idNicho";

                $sentencia=$conecta->prepare($query);
                $sentencia->execute(array());

                $resultado=$sentencia->fetch(PDO::FETCH_ASSOC);
                $sentencia->closeCursor();   
                
                $arrEnterrados[] = $resultado;
            }

            $conecta = null;

            return $arrEnterrados;
        }

        private function getNicho($idNicho)
        {
            $nicho = array();

            $nichoProp      = $this->getPropNicho($idNicho);
            $nichoEstado    = $this->getEstNicho($idNicho);
            $nichoCremados  = $this->getCremNicho($idNicho);
            $nichoSarcofago = $this->getSarcNicho($idNicho);

            $nicho = [
                "Propietario" => $nichoProp,
                "Estado" => $nichoEstado,
                "Cremados" => $nichoCremados,
                "Sarcofagos" => $nichoSarcofago
            ];

            return $nicho;
        }

        public function getNichos()
        {
            $counter = 0;

            $nichos = array();
            $nichos = ["Nicho" => array()];

            for($i=1; $i<=10; $i++)
            {
                $nichos["Nicho"][$counter] = $this->getNicho($i);
                $counter++;
            }
            
            return $nichos;
        }
    }
?>