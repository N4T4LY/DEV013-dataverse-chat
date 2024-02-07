let ROUTES = {}; // Esta variable almacena información sobre las rutas en tu SPA.
let rootEl; //Elemento DOM: Una variable para almacenar el elemento raíz donde el contenido cambiará/aparecerá.
// Una función para establecer el elemento raíz del router
//especifica en que vista
export const setRootEl = (el) => {
  rootEl = el;
};
//Esta función asigna el valor del parámetro routes al objeto ROUTES
export const setRoutes = (newRoutes) => {
  //verificamos que routes sea una objeto y en caso que no sea, manda un error
  if (typeof newRoutes === "object") {
    if (newRoutes["/error"]) {
      ROUTES = newRoutes;
      console.log("routes", ROUTES);
    }
  }
};
export const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  const params = new URLSearchParams(queryString);
  // convert URLSearchParams to an object
  const obj = Object.fromEntries(params);
  // return the object
  return obj;
};
//Una función que renderiza una vista en el elemento root especificado. Tiene dos parametros, pathname que es el parte de window.location y props que es un objeto de datos que podemos pasar a la vista. La función renderView borra el contenido existente, encuentra la función de view para el pathname dado y llama a esa función de vista pasando props como argumento . Luego agrega el elemento devuelto por la función de vista al elemento root.
export const renderView = (pathname, props = {}) => {
  const root = rootEl;
  let view;
  root.innerHTML = "";
  if (ROUTES[pathname]) {
    view = ROUTES[pathname](props);
  } else {
    view = ROUTES["/error"](props);
  }
  root.appendChild(view);
};
//  Actualizar nuestro historial de nuestro navegador a partir de la url
export const navigateTo = (pathname, props = {}) => {
  // update window history with pushState
  const URLvisited = window.location.origin + pathname;
  console.log("guarda", window.location.origin + pathname);
  history.pushState({}, "", URLvisited);
  // render the view with the pathname and props
  renderView(pathname, props);
};

export const onURLChange = (location, props = {}) => {
  // parse the location for the pathname and search params

  // convert the search params to an object
  props = queryStringToObject(window.location.search);
  // render the view with the pathname and object
  console.log("location", window.location);
  renderView(location.pathname,props);
};
