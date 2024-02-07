// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import {Welcome} from './views/Welcome.js';
import {Home} from './views/Home.js';
import {DetailCard} from './views/DetailCard.js';
import {Error} from './views/Error.js';
import { setRoutes, setRootEl , onURLChange, queryStringToObject} from './router.js';
import data from './data/dataset.js';
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

// data.forEach((elem) => {
//     routes[`/detailCard?${elem.name}`] = DetailCard;
//   });

setRoutes(routes);
const root=document.getElementById("root");

document.addEventListener("DOMContentLoaded", (e)=>{
    console.log("e",e.currentTarget.location.pathname);   
    setRootEl(root);
    onURLChange(e.currentTarget.location);
   

});

// POPSATE
window.addEventListener("popstate",(e) =>{
    console.log("eventob",e.state);
    onURLChange(window.location,e);
});
// window.onpopstate= onURLChange;