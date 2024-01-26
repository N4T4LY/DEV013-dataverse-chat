export const Home = ()=>{
    // let html='';
    // return(html+=`<h1>BIENVENIDA</h1>`);
    const el = document.createElement("h1");
   el.innerHTML = "I'm the Home Page";
  return el;
}