const bnicho = document.getElementById ('buton_nichos'),
      rcremacion = document.getElementById ('cremacion'),
      rsarcofago =document.getElementById ('sarcofago');

    

const apiGetDescEmp = fetch("http://localhost/cementerio-proyecto/controller/api/apiGetDescEmp.php");
apiGetDescEmp.then (resp => { resp.json()
              .then (data =>{
                const empleados = data;
                console.log(empleados);
              })
})

const apiGetInfoEmp = fetch("http://localhost/cementerio-proyecto/controller/api/apiGetInfoEmp.php");
apiGetInfoEmp.then (resp =>{ resp.json()
             .then (data =>{
                 const infoEmpleados = data;
                 console.log(infoEmpleados);
             })  
})

const apiGetNicho = fetch("http://localhost/cementerio-proyecto/controller/api/apiGetNIcho.php")
apiGetNicho.then (resp =>{ resp.json() 
             .then (data =>{ 
                const {Nicho} = data;
                for (const x in Nicho ){
                    if(x <= 9){
                        bnicho.innerHTML = bnicho.innerHTML + boton_nicho(x);
                    }
                }
                
                for (const h of Nicho){
                      let {Cremados} = h;
                      for (const hh of Cremados){
                          let {Nombres, ApellidoP, ApellidoM, Estado, FechaDef} = hh;
                          rcremacion.innerHTML = rcremacion.innerHTML + ren_cremacion(Nombres, ApellidoP, ApellidoM, Estado, FechaDef)
                            break;
                      }
                      
                }
                // console.log(Nicho[0].Cremados[0]);

             })  
})


const ren_cremacion = (nom,apP,apM,est,fec) => {
    return  `<div> <a tabindex="0" class="btn btn-lg btn-danger" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="Dismissible popover" data-bs-content="Que onda camaradas ">Nich</a>
    </div>
    `
}



const ren_sarco = (nom, apP, apM, est, fech) => {
  return `  </br><hr/><p>Nombre: ${nom}</p>
  <p>A Paterno: ${apP}</p>
  <p>A Materno: ${apM}</p>
  <p>Estado: ${est}</p>
  <p>Fecha: ${fech}</p>
  `
}



const boton_nicho = (x) => {
  return `  <button class="boton"  >Nicho A - ${x} </button>
  `
}

























