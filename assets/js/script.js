let sarco = document.getElementById('sarco'),
    crema = document.getElementById('crema');

    
const apiGetDescEmp = fetch("http://localhost/cementerio-proyecto/controller/api/apiGetDescEmp.php");
apiGetDescEmp.then (resp => { resp.json()
              .then (data =>{
                const desEmp = data;
              })
})

const apiGetInfoEmp = fetch("http://localhost/cementerio-proyecto/controller/api/apiGetInfoEmp.php");
apiGetInfoEmp.then (resp =>{ resp.json()
             .then (data =>{
                 const infoEmp = data;
             })  
})

const apiGetNicho = fetch("http://localhost/cementerio-proyecto/controller/api/apiGetNIcho.php")
apiGetNicho.then (resp =>{ resp.json() 
             .then (data =>{ 
                const cremados = data.Cremados;
                const sarcofagos = data.Sarcofagos;
                for (const x of cremados){
                  let {Nombres, ApellidoP, ApellidoM, Estado, FechaDef} = x;
                  crema.innerHTML = crema.innerHTML + ren_nicho(Nombres, ApellidoP, ApellidoM, Estado, FechaDef);
                }
                for (const z of sarcofagos){
                  let {Nombres, ApellidoP, ApellidoM, Estado, FechaDef} = z;
                  sarco.innerHTML = sarco.innerHTML + ren_sarco(Nombres, ApellidoP, ApellidoM, Estado, FechaDef);
                }

             })  
})










const ren_nicho = (nom, apP, apM, est, fech) =>{
    return  ` </br><hr/> <p>Nombre: ${nom}</p>
    <p>A Paterno: ${apP}</p>
    <p>A Materno: ${apM}</p>
    <p>Estado: ${est}</p>
    <p>Fecha: ${fech}</p>
    `
}

const ren_sarco = (nom, apP, apM, est, fech) =>{
  return `  </br><hr/><p>Nombre: ${nom}</p>
  <p>A Paterno: ${apP}</p>
  <p>A Materno: ${apM}</p>
  <p>Estado: ${est}</p>
  <p>Fecha: ${fech}</p>
  `
}