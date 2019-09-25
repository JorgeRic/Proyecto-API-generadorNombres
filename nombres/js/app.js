'use strict'

                                  // Con AJAX

// const generarNombre = document.getElementById('generar-nombre')
// generarNombre.addEventListener('submit', cargarNombres)

// function cargarNombres(event){
// event.preventDefault();

// const origen = document.querySelector('#origen');
// const origenSelected = origen.options[origen.selectedIndex].value;

// const genero = document.querySelector('#genero');
// const generoSelected = genero.options[genero.selectedIndex].value;

// const cantidad = document.querySelector('#numero').value;

// let url ='';
// url += 'https://uinames.com/api/?'

// if(origenSelected !== ''){
//   url += `region=${origenSelected}&`
// }
// if(generoSelected !== ''){
//   url += `gender=${generoSelected}&`
// }
// if(cantidad !== ''){
//   url += `amount=${cantidad}&`
// }

// let xhr;
// xhr = new XMLHttpRequest();
// xhr.open('GET', url, true)
// xhr.onload = function(){
//   if(this.status === 200){
//     const nombres = JSON.parse(this.responseText)
//     let htmlNombres = `<h3>Nombres generados:</h3>`;
    
//     htmlNombres += `<ul class='lista'>`
//     nombres.forEach(function(nombre){
//       htmlNombres += `<li>${nombre.name}</li>`
//     })
//     htmlNombres += `</ul>`;
    
//     const resultado = document.querySelector('#resultado')
//     resultado.innerHTML = htmlNombres
//     console.log(resultado)
//   }
// }
// xhr.send();
// }


                      //Con fetch
const generarNombre = document.getElementById('generar-nombre')
generarNombre.addEventListener('submit', cargarNombres)

function cargarNombres(event){
event.preventDefault();

const origen = document.querySelector('#origen');
const origenSelected = origen.options[origen.selectedIndex].value;

const genero = document.querySelector('#genero');
const generoSelected = genero.options[genero.selectedIndex].value;

const cantidad = document.querySelector('#numero').value;

if(event.target.classList = 'button-primary u-full-width'){
mostrarSpinner('block')
}

const resultadoAnterior = document.querySelector('#resultado > div');
if(resultadoAnterior){
  resultadoAnterior.remove()
}

let url ='';
url += 'https://uinames.com/api/?'

if(origenSelected !== ''){
  url += `region=${origenSelected}&`
}
if(generoSelected !== ''){
  url += `gender=${generoSelected}&`
}
if(cantidad !== ''){
  url += `amount=${cantidad}&`
}

fetch(url)
.then(res => res.json())
.then(data => {
  let html = `<div>`
  html +=`<h2>Nombres generados:</h2>`
  html += `<ul>`
  data.forEach(nombre => {
    html +=`<li class='lista'>${nombre.name}</li>`;
  })
  html += `</ul>`
  html += `</div>`

  setTimeout(()=>{
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = html;
    mostrarSpinner('none')
  }, 2000)

})
.catch(error => console.log(error))
}

function mostrarSpinner(vista){
  const contenidoSpinner = document.querySelector('.contenido-spinner');
  contenidoSpinner.style.display = vista;
}
