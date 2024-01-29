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

