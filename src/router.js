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

//Una función que renderiza una vista en el elemento root especificado. Tiene dos parametros, pathname que es el parte de window.location y props que es un objeto de datos que podemos pasar a la vista. La función renderView borra el contenido existente, encuentra la función de view para el pathname dado y llama a esa función de vista pasando props como argumento . Luego agrega el elemento devuelto por la función de vista al elemento root.
export const renderView = (pathname, props = {}) => {
  const root= rootEl;
  let view;
  root.innerHTML = '';
  console.log(pathname);
  if(ROUTES[pathname]){
    view=ROUTES[pathname]
  }else{
    view=ROUTES["/error"]
  }
  console.log(view);
root.appendChild(view());


}
