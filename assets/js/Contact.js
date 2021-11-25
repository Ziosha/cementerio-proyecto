const card = document.getElementById('cards');

const apiGetDescEmp = fetch("http://localhost/cementerio-proyecto/controller/api/apiGetDescEmp.php");
apiGetDescEmp.then (resp => { resp.json()
              .then (data =>{
                  let a = 0;
                for (const x of data){
                    a++;
                    let {Nombres, ApellidoP, ApellidoM, Cargo, Celular, Descri} = x;
                    card.innerHTML = card.innerHTML + ren_card(Nombres, ApellidoP, ApellidoM, Cargo, Celular, Descri, a);
                }
              })
})

const apiGetInfoEmp = fetch("http://localhost/cementerio-proyecto/controller/api/apiGetInfoEmp.php");
apiGetInfoEmp.then (resp =>{ resp.json()
             .then (data =>{
                 const infoEmpleados = data;
                 
             })  
})


const ren_card = (Nom, ApP, ApM, Car, Cel, Des, a) =>{
    return `<div class="card">
	<h2 class="card-title">Vendedor ${a}</h2>
	<img src="assets/imagenes/perfil.jpg" alt="">
	<p class="card-desc">Nombre : ${Nom} Apellidos: ${ApP ,ApM}  Cargo: ${Car}  Celular: ${Cel} Descripcion: ${Des}</p>
  </div>`
}