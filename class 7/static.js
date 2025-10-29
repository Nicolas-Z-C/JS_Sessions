function Funcion1() {
 const palabras = document.getElementsByClassName("parrafo");
 for (let i = 0; i < palabras.length; i++){
    palabras[i].style.backgroundColor = "yellow";
 }
}

function Funcion2() {
  const lista = document.querySelectorAll(".listas");
  lista.forEach((i, x) => {
    i.textContent = `${x + 1}. ${i.textContent}`;
  });
}

const boton1 = document.querySelector("#bt1");
const boton2 = document.querySelector("#bt2");

boton1.addEventListener('click', ()=>{
    boton1.textContent="CHAMOZUELAAAAAAAA";
    boton1.classList.add('aplicado');
    boton1.disabled = true;
}, {once: true})

boton2.addEventListener('click', ()=>{
    boton2.textContent="RAAAAAAAAAAAAAAAA";
    boton2.style.backgroundColor="red";
    boton2.classList.add('border')
})

boton1.style.textTransform = "uppercase";
boton1.setAttribute("style","text-transform:capitalize")
