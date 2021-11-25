<?php
    class Conectar{

        protected $dbCon;

        protected function Conexion()
        {
            try
            {
                //$conectar = $this->dbh = new PDO("mysql:local=localhost;port=3308;dbname=bd_jazmines","root","");
                $conectar = $this->dbh = new PDO("mysql:local=localhost;port=3306;dbname=bd_jazmines","root","");
                
                return $conectar;
            }
            catch(Exception $e)
            {
                print "Error en la conexion a la BD: " . $e->getMessage();
                die();
            }
        }

        public function SetNames(){
            return $this->dbh->query("SET NAMES 'utf8'");
        }
    
    }


?>