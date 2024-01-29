export const Welcome = () => {
  const main = document.createElement("main");
  const containerLeft = document.createElement("section");
  const containerRight = document.createElement("section");

  main.setAttribute("id", "welcoming");
  main.innerHTML = "I'm the Welcome Page";
  return main;
  //return document.getElementById("root").innerHTML=`<h1>BIENVENIDA</h1>`;

}
