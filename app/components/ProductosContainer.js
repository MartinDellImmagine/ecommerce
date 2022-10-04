import requestGet from "../helpers/requestGet.js"
import Productos from "./Productos.js"
import AsideProductos from "./AsideProductos.js"
import PerfilProductos from "./PerfilProductos.js"

const ProductosContainer = (url, donde,fotoPerfil)=>{
    const divProductos = document.createElement('section')
    const divAsideProductos = document.createElement('div')


    divProductos.setAttribute('class', 'row justify-content-between')
    
    divAsideProductos.setAttribute('class', 'row justify-content-between')

    divProductos.setAttribute('class', 'container')
    divProductos.appendChild(PerfilProductos(fotoPerfil,fotoPerfil))
    requestGet(url).then(val=>divAsideProductos.appendChild(Productos(val)))
    divAsideProductos.appendChild(AsideProductos(donde))
    divProductos.appendChild(divAsideProductos)

    return divProductos
}


export default ProductosContainer