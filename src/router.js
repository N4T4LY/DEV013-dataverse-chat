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
    if(routes["/error"]){
        ROUTES = routes;
        console.log("routes",ROUTES);
      
   }
  } 

}

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}

//Una función que renderiza una vista en el elemento root especificado. Tiene dos parametros, pathname que es el parte de window.location y props que es un objeto de datos que podemos pasar a la vista. La función renderView borra el contenido existente, encuentra la función de view para el pathname dado y llama a esa función de vista pasando props como argumento . Luego agrega el elemento devuelto por la función de vista al elemento root.
const renderView = (pathname, props = {}) => {
    const root= rootEl;
    root.innerHTML = '';
    if(ROUTES[pathname]){

    }
  
  

}


//una función que recibe una ruta, envía un nuevo estado histórico y representa la nueva vista.
export const navigateTo = (pathname, props = {}) => {
  // update window history with pushState
  // render the view with the pathname and props
}

//una función para manejar cambios de URL con popstate. Cuando la URL cambia, analiza el pathname y search desde la location (window.location) y luego llama a renderView.Necesitamos conectar esta función para que se active cuando el usuario avance o retroceda. Para lograr esto, podemos escuchar el evento popstate de la window. Cuando se activa popstate, significa que la URL ha cambiado debido a la navegación o interacción del usuario.

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
}
