let log = document.getElementById('header'),
    nav = document.getElementById('navbar'),
    fot = document.getElementById('foote');


const log_ren = () =>{
    return ` <div>
    <center><img  src="assets/imagenes/logoCorto.png" class="logo" width="70%" height="50%"></center>
    </div>
    `
}
const nav_ren = () =>{
    return `<div class="navbar-item"><a href="index.html">Hola</a></div>
    <div class="navbar-item"><a href="index.html">Soy un</a></div>
    <div class="navbar-item"><a href="index.html">Navbar</a></div>
    <div><img class = "logito" src="assets/imagenes/logitoCementerio.png" alt=""></div>`
}
const fot_ren = (nombre ) =>{
    return `<footer >
        <p>2021 © <span class="foot"> Cementerio - ${nombre}</span></p>
        <a href="#">| Contact US </a>
        <a href="#">| Support</a>
        <ul>
            <li><a href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
    </footer>
    `
}

let json = required('/h.json');
console.log(json);

log.innerHTML = log_ren();
nav.innerHTML = nav_ren();
fot.innerHTML = fot_ren('Jazmine');

