import { navigateTo }  from "../router.js";
export const Welcome = () => {
  const main = document.createElement("div");
  const containerLeft = document.createElement("div");
  const polygon = document.createElement("div");
  const img =document.createElement('img');
  const containerRight = document.createElement("div");
  const  h1 = document.createElement("h1");
  const p=document.createElement("p")
  const button=document.createElement("button");
  const footer=document.createElement("p");

  main.setAttribute("id", "welcoming");
  containerLeft.setAttribute("class","image");
  polygon.setAttribute("class","polygon")
  img.setAttribute("src","./assets/pokemons-welcome.png")
  containerRight.setAttribute("class","text");
  button.setAttribute("id","close-welcoming");
  footer.setAttribute("class","footer");

  h1.innerHTML = "¡Bienvenidos a PokéDex!";
  p.innerHTML = "¡Encuentra a tu Pokémon!";
  button.innerHTML = "INICIAR";
  footer.innerHTML="Copyright © 2023 Nataly Fernandez y Aylin Santa Cruz Vargas";
  
  //containerLeft
 containerLeft.appendChild(polygon);
 containerLeft.appendChild(img);
  //containerRight
  containerRight.appendChild(h1);
  containerRight.appendChild(p);
  containerRight.appendChild(button);
  containerRight.appendChild(footer);

  main.appendChild(containerLeft);
  main.appendChild(containerRight);
 
  button.addEventListener("click",()=>{
    navigateTo("/home",{});
    }) 
return main;
}
