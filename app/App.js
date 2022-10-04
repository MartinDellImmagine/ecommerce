//imports 

import Nav from "./components/Nav.js"
import Carrusel from "./components/Carrusel.js";
import OfertasContainer from "./components/OfertasContainer.js";
import Footer from "./components/Footer.js";
import Router from "./components/Router.js";
import ProductosContainer from "./components/ProductosContainer.js";
import pasarAcomprar from "./helpers/pasarAcomprar.js";



//funcion --- principal
export const App = ()=>{

    //creacion de elementos----
    
    //DIV ROOT
    const divRoot = document.querySelector('#Root')

    //h1 MEJORES OFETAS

    const tituloOfertas = document.createElement('h2')
    tituloOfertas.setAttribute('class','text-center')
    tituloOfertas.innerHTML = `MEJORES OFERTAS`

    //funciones
    pasarAcomprar()
    //llamadas a componentes

    //hash = index.html
    if(Router()== "" || Router() == "#/"){
        divRoot.innerHTML=""
        console.log('Estas en la pagina principal',Router())
        divRoot.appendChild(Nav())
        divRoot.appendChild(Carrusel())
        divRoot.appendChild(tituloOfertas)
        divRoot.appendChild(OfertasContainer())
        divRoot.appendChild(Footer())
    }

    
    //hash = procesadores
    if(Router()== '#/procesadores'){
        divRoot.innerHTML=""
        console.log('Estas en la pagina de procesadores',Router())
        divRoot.appendChild(Nav())
        divRoot.appendChild(ProductosContainer('https://6334c678ea0de5318a08cea5.mockapi.io/silivastore_procesadores', 'proce','./app/multimedia/images/procesadores/PERFIL DE PAGINA PROCESADORES.jpg'))
        divRoot.appendChild(Footer())
    }
    //hash = tarjetas graficas
    if(Router()== '#/tarjetasgraficas'){
        divRoot.innerHTML=""
        console.log('Estas en la pagina de gpus',Router())
        divRoot.appendChild(Nav())
        divRoot.appendChild(ProductosContainer('https://6334c678ea0de5318a08cea5.mockapi.io/silivastore_graficas', 'gpu','./app/multimedia/images/gpu/perfil.jpg'))
        divRoot.appendChild(Footer())
    }
    if(Router()== '#/motherboards'){
        divRoot.innerHTML=""
        console.log('Estas en la pagina de gpus',Router())
        divRoot.appendChild(Nav())
        divRoot.appendChild(ProductosContainer('https://6334c678ea0de5318a08cea5.mockapi.io/Joyeria', 'mother','./app/multimedia/images/mother/perfil.jpg'))
        divRoot.appendChild(Footer())
    }

    console.log('hash = ',Router());
    
}