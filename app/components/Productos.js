

const Productos = (arrayProductos)=>{
    let divProductos = document.createElement('div')
    divProductos.setAttribute('class', 'col-md-9 section')
    try {
        arrayProductos.map((el)=>{
            let {nombre, precio, stock, id ,imagen} = el
            divProductos.innerHTML += `
                
                        <div class="mcard-container">
                            <a href="#"><img class="mcard-img" src="${imagen}" alt="${nombre}"></a>
                            <div class="mcard-body">
                                <h5 class="mcard-body__h5">${nombre}</h5>
                                <p class="mcard-body__p">$${precio}</p>
                                <button data-id="${id}" data-nombre="${nombre}" data-stock="${stock}" data-precio="${precio}" class="btn btn-success me-md-2" type="button">Sumar al carrito</button>
                            </div>
                       
                        
                        
        
            `
        })
    } catch (error) {
        console.error(error);
    }
   

    return divProductos
}


export default Productos