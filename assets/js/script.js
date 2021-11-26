const bnicho = document.getElementById ('buton_nichos'),
      rcremacion = document.getElementById ('cremacion'),
      rsarcofago =document.getElementById ('sarcofago'),
      colornicho = document.getElementById ('nichos_rend'),
	  card = document.getElementById ('rend_card');

    


const apiGetNicho = fetch("http://localhost/cementerio-proyecto/controller/api/apiGetNIcho.php")
apiGetNicho.then (resp =>{ resp.json() 
             .then (data =>{ 
                const {Nicho} = data; 
                for (const x in Nicho ){
                    if(x <= 9){
                        bnicho.innerHTML = bnicho.innerHTML + boton_nicho(x);
                    }
                }
            })  
        })
        
const ren_nicho = (x) => {
    const apiGetNichos = fetch("http://localhost/cementerio-proyecto/controller/api/apiGetNIcho.php")
    apiGetNichos.then (r =>{r.json()
                .then(dat => {
                    const {Nicho} = dat
                    let {Cremados} = Nicho[x];
                    let {Sarcofagos} = Nicho[x];
                    if (Nicho[x].Estado == "Comprado" || Nicho[x].Estado == "Rentado"){
                            rcremacion.innerHTML = " ";
                            rsarcofago.innerHTML = " ";
                            setTimeout( () =>{
                                for (const hh of Cremados){
                                    let {Nombres, ApellidoP, ApellidoM, Estado, FechaDef} = hh;
                                    rcremacion.innerHTML = rcremacion.innerHTML + ren_cremacionV(Nombres, ApellidoP, ApellidoM, Estado, FechaDef);
                                }
                                for (const xx of Sarcofagos){
                                    let {Nombres, ApellidoP, ApellidoM, Estado, FechaDef} = xx;
                                    rsarcofago.innerHTML= rsarcofago.innerHTML + ren_sarcofagoV(Nombres, ApellidoP, ApellidoM, Estado, FechaDef);
                                }
                            },300)
                    } else {
                        rcremacion.innerHTML = " ";
                        rsarcofago.innerHTML = " ";
                        setTimeout( () =>{
                            for (const hh in Cremados){
                                rcremacion.innerHTML = rcremacion.innerHTML + ren_cremacionR(" Cremado Vacio");
                            }
                            for (const xx of Sarcofagos){
                                rsarcofago.innerHTML= rsarcofago.innerHTML + ren_sarcofagoR("Sarcofago Vacio");
                            }
                        },300)
                    }
                }) 
            }) .catch(console.warn);
 }


 const apiGetInfoEmp = fetch("http://localhost/cementerio-proyecto/controller/api/apiGetInfoEmp.php");
 apiGetInfoEmp.then (resp =>{ resp.json()
			  .then (data =>{
				  for (const x of data){
					  let {Nombres, ApellidoP, ApellidoM, CI, Celular} = x;
					  card.innerHTML = card.innerHTML + rend_cards(Nombres, ApellidoP, ApellidoM, CI, Celular);
				  }
			  })  
 })


 const rend_cards = (nom, app, apm, ci, cel ) =>{
	return ` <div class="card mb-3" style="max-width: 540px; box-shadow: 0 0 30px rgba(27, 27, 27, 0.719), inset 0 0 1px rgba(197, 197, 197, 0.274);">
	<div class="row g-0" >
	  <div class="col-md-4">
		<img src="assets/imagenes/perfil.jpg" class="img-fluid rounded-start" alt="...">
	  </div>
	  <div class="col-md-8">
		<div class="card-body">
		  <h5 class="card-title">Contacto Vendedor</h5>
		  <p class="card-text">Nombre: ${nom} <br> Apellidos: ${app} ${apm} <br> CI: ${ci} <br> Celular: ${cel}</p>
		  <p class="card-text"><small class="text-muted">------2021-----</small></p>
		</div>
	  </div>
	</div>
  </div>
`
 }


const ren_cremacionV = (nom, apP, apM, est, fec) => {
    colornicho.style="box-shadow: 0 0 30px rgba(241, 7, 7, 0.61), inset 0 0 1px rgba(255, 255, 255, 0.055);"
    return  `	<div class="serv animate__animated animate__fadeInUp">
	    	<div class="col" ontouchstart="this.classList.toggle('hover');" >
				<div class="container">
		    		<div class="front" style="background-image: url(assets/imagenes/crema.jpg); box-shadow: 0 0 30px rgba(241, 7, 7, 0.61), inset 0 0 1px rgba(255, 255, 255, 0.055);" >
		            	<div class="inner" >
			            
		             		<span>1</span>
		             	</div>
		             </div>
		            <div class="back" style="box-shadow: 0 0 30px rgba(241, 7, 7, 0.61), inset 0 0 1px rgba(255, 255, 255, 0.055);">
		            	<div class="inner">
		                	<a href="#" style="color: aliceblue; text-decoration: none;" ><p style=" font-weigth:bold; font-zise= 10px; text-shadow: 2px 1px 8px rgb(0, 0, 0);">Nombre: ${nom}<br> Apellidos: ${apP} ${apM}<br> Estado: ${est}<br>Fecha: ${fec} </p></a>
		            	</div>
					</div>
				</div>
			</div>
		</div>
	
    `
}
const ren_sarcofagoV = (nom, apP, apM, est, fec) => {
    colornicho.style="box-shadow: 0 0 30px rgba(241, 7, 7, 0.61), inset 0 0 1px rgba(255, 255, 255, 0.055);"
    return  `	<div class="serv animate__animated animate__fadeInUp" >
	    	<div class="col" ontouchstart="this.classList.toggle('hover');" >
				<div class="container">
		    		<div class="front" style="background-image: url(assets/imagenes/Sarcofago.jpg); box-shadow: 0 0 30px rgba(241, 7, 7, 0.61), inset 0 0 1px rgba(255, 255, 255, 0.055);">
		            	<div class="inner">
			            
		             		<span>1</span>
		             	</div>
		             </div>
		            <div class="back" style="box-shadow: 0 0 30px rgba(241, 7, 7, 0.61), inset 0 0 1px rgba(255, 255, 255, 0.055);">
		            	<div class="inner">
		                	<a href="#" style="color: aliceblue; text-decoration: none;" ><p style=" font-weigth:bold; font-zise= 10px; text-shadow: 2px 1px 8px rgb(0, 0, 0);">Nombre: ${nom}<br> Apellidos: ${apP} ${apM} <br> Estado: ${est} <br> Fecha: ${fec} </p></a>
		            	</div>
					</div>
				</div>
			</div>
		</div>
	
    `
}

const ren_cremacionR = (dispo) => {
    colornicho.style="box-shadow: 0 0 30px rgba(15, 241, 7, 0.719), inset 0 0 1px rgba(255, 255, 255, 0.055);"
    return  `	<div class="serv animate__animated animate__fadeInUp">
	    	<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
		    		<div class="front" style="background-image: url(assets/imagenes/crema.jpg); box-shadow: 0 0 30px rgba(15, 241, 7, 0.719), inset 0 0 1px rgba(255, 255, 255, 0.055);">
		            	<div class="inner">
			            
		             		<span>1</span>
		             	</div>
		             </div>
		            <div class="back" style="box-shadow: 0 0 30px rgba(15, 241, 7, 0.719), inset 0 0 1px rgba(255, 255, 255, 0.055);">
		            	<div class="inner">
		                	<a href="#" style="color: aliceblue; text-decoration: none;" ><p style=" font-weigth:bold; font-zise= 16px; text-shadow: 2px 1px 8px rgb(0, 0, 0);">${dispo} </p></a>
		            	</div>
					</div>
				</div>
			</div>
		</div>
	
    `
}
const ren_sarcofagoR = (dispo) => {
    colornicho.style="box-shadow: 0 0 30px rgba(15, 241, 7, 0.719), inset 0 0 1px rgba(255, 255, 255, 0.055);"
    return  `	<div class="serv animate__animated animate__fadeInUp">
	    	<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
		    		<div class="front" style="background-image: url(assets/imagenes/Sarcofago.jpg); box-shadow: 0 0 30px rgba(15, 241, 7, 0.719), inset 0 0 1px rgba(255, 255, 255, 0.055);">
		            	<div class="inner">
			            
		             		<span>1</span>
		             	</div>
		             </div>
		            <div class="back" style="box-shadow: 0 0 30px rgba(15, 241, 7, 0.719), inset 0 0 1px rgba(255, 255, 255, 0.055);">
		            	<div class="inner">
		                	<a href="#" style="color: aliceblue; text-decoration: none;" ><p style=" font-weigth:bold; font-zise= 16px; text-shadow: 2px 1px 8px rgb(0, 0, 0);">${dispo} </p></a>
		            	</div>
					</div>
				</div>
			</div>
		</div>
	
    `
}





const boton_nicho = (x) => {
  return `  <button class="boton" style="box-shadow: 0 0 30px rgba(120, 40, 140, 0.619), inset 0 0 1px rgba(255, 255, 255, 0.055); text-shadow:1px 1px 1px black; font-weight: bold; " onclick="ren_nicho(${x})"  >Nicho A - ${x} </button>
  `
}




let efect = document.getElementById('tit');

efect.style="color = 'white' ;";




















