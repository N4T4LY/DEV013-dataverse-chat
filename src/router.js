let ROUTES = {}; // Esta variable almacena información sobre las rutas en tu SPA.
let rootEl; //Elemento DOM: Una variable para almacenar el elemento raíz donde el contenido cambiará/aparecerá.

// Una función para establecer el elemento raíz del router
//especifica en que vista 
export const setRootEl = (el) => {
  rootEl = el;
}

//Esta función asigna el valor del parámetro routes al objeto ROUTES
export const setRoutes = (routes) => {
  //verificamos que routes sea una objeto y en caso que no sea, manda un error
  if (typeof routes === 'object') {
   
        ROUTES = routes;
        console.log("routes",ROUTES);
      
   
  } 

}
const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  const params = new URLSearchParams (queryString);
  // convert URLSearchParams to an object

  // return the object
}
