// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import {Welcome} from './views/Welcome.js';
import {Home} from './views/Home.js';
import {DetailCard} from './views/DetailCard.js';
import {Error} from './views/Error.js';
import { setRoutes, setRootEl , onURLChange , renderView} from './router.js';



/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
const routes = {
    "/": Welcome,
    "/home": Home,
    "/detailCard":DetailCard,
    "/error":Error

}
setRoutes(routes);
console.log(setRoutes(routes));
const root=document.getElementById("root");
renderView(routes,"hola");

//DOMContentLoaded no espera a que las hojas de estilo se carguen, sin embargo los scripts diferidos sí esperan hojas de estilo, y el DOMContentLoadedevento está hecho cola después de guiones diferidos. También, guiones que no se aplazan o se sincronizado (por ejemplo. <script>) esperará a que las hojas de estilo ya parladadas se carguen.
// window.addEventListener("DOMContentLoaded", ()=>{
//     console.log(setRootEl());
    
//     onURLChange();
    
//    console.log("root",setRootEl(root));

// });
document.addEventListener("DOMContentLoaded", ()=>{
    console.log(setRootEl(root));
    
    onURLChange();
    
   console.log("root",setRootEl(root));

});
// POPSATE
window.addEventListener("popstate",()=>{

 });


