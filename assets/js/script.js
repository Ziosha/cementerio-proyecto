const bnicho = document.getElementById ('buton_nichos'),
      rcremacion = document.getElementById ('cremacion'),
      rsarcofago =document.getElementById ('sarcofago'),
      colornicho = document.getElementById ('nichos_rend');

    

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
                const {Nicho} = data; console.log(Nicho);
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
                    console.log(Nicho[x]); 
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
                        console.log(Nicho[x].Estado);
                    } else {
                        rcremacion.innerHTML = " ";
                        rsarcofago.innerHTML = " ";
                        setTimeout( () =>{
                            for (const hh in Cremados){
                                rcremacion.innerHTML = rcremacion.innerHTML + ren_cremacionR("Disponible Banda");
                            }
                            for (const xx of Sarcofagos){
                                rsarcofago.innerHTML= rsarcofago.innerHTML + ren_sarcofagoR("Disponible Cumpita");
                            }
                        },300)
                        console.log("Orale a comoprar putito");
                    }


                }) 
            }) .catch(console.warn);
 }


    



const ren_cremacionV = (nom,apP,apM,est,fec) => {
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
		                	<a href="#" style="color: aliceblue; text-decoration: none;" ><p style=" font-zise='12px'">Nombre:${nom} Apellidos: ${apP}${apM} Estado: ${est}  Fecha: ${fec} </p></a>
		            	</div>
					</div>
				</div>
			</div>
		</div>
	
    `
}
const ren_sarcofagoV = (nom,apP,apM,est,fec) => {
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
		                	<a href="#" style="color: aliceblue; text-decoration: none;" ><p style=" font-zise='12px'">Nombre:${nom} Apellidos: ${apP}${apM} Estado: ${est}  Fecha: ${fec} </p></a>
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
		                	<a href="#" style="color: aliceblue; text-decoration: none;" ><p style=" font-zise='12px'">${dispo} </p></a>
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
		    		<div class="front" style="background-image: url(assets/imagenes/crema.jpg); box-shadow: 0 0 30px rgba(15, 241, 7, 0.719), inset 0 0 1px rgba(255, 255, 255, 0.055);">
		            	<div class="inner">
			            
		             		<span>1</span>
		             	</div>
		             </div>
		            <div class="back" style="box-shadow: 0 0 30px rgba(15, 241, 7, 0.719), inset 0 0 1px rgba(255, 255, 255, 0.055);">
		            	<div class="inner">
		                	<a href="#" style="color: aliceblue; text-decoration: none;" ><p style=" font-zise='12px'">${dispo} </p></a>
		            	</div>
					</div>
				</div>
			</div>
		</div>
	
    `
}





const boton_nicho = (x) => {
  return `  <button class="boton" style="box-shadow: 0 0 30px rgba(120, 40, 140, 0.619), inset 0 0 1px rgba(255, 255, 255, 0.055);" onclick="ren_nicho(${x})"  >Nicho A - ${x} </button>
  `
}

























