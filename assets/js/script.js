const nicho = document.getElementById('nichos');

    

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
                  
                }
                for (const z of sarcofagos){
                  let {Nombres, ApellidoP, ApellidoM, Estado, FechaDef} = z;
                
                }
             })  
})


const ren_nicho = (nom, apP, apM, est, fech) => {
    return  ` </br><hr/> <p>Nombre: ${nom}</p>
    <p>A Paterno: ${apP}</p>
    <p>A Materno: ${apM}</p>
    <p>Estado: ${est}</p>
    <p>Fecha: ${fech}</p>
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


let h = "holaaaaaaaaaaaaaaaaaaaaaa"

const box_nicho = () => {
  return `  <a tabindex="0" class="btn btn-lg btn-danger" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="Dismissible popover" data-bs-content="${h}">Dismissible popover</a>
  `
}

nicho.innerHTML = box_nicho();























