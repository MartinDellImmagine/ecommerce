import Ofertas from "./Ofertas.js"
import requestGet from "../helpers/requestGet.js"

const OfertasContainer = ()=>{
    const ofertasDiv = document.createElement('div')
    ofertasDiv.setAttribute('class', 'container')
    requestGet('https://6334c678ea0de5318a08cea5.mockapi.io/productos').then(val=>{
        ofertasDiv.appendChild(Ofertas(val))
    })


    return ofertasDiv
}

export default OfertasContainer