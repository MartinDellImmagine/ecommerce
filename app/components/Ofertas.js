import pintarCarro from "../helpers/PintarCarro.js"
const Ofertas = (arrayProductos) =>{
    let arrayCarrito ={}
    if(arrayCarrito = JSON.parse(localStorage.getItem('Carrito'))== null){
        arrayCarrito = {}
    }else{
        arrayCarrito = JSON.parse(localStorage.getItem('Carrito'))
    }
    pintarCarro(arrayCarrito)
   
    let cardsOfertas = document.createElement('section')

    cardsOfertas.setAttribute('class', 'card-group')

    //agregar al carro
    document.addEventListener('click',(event)=>{
        if (event.target.className == "btn btn-success me-md-2"){

            let producto = {
                id:event.target.dataset.id,
                nombre: event.target.dataset.nombre,
                stock: event.target.dataset.stock,
                cantidad: 1,
                precio: event.target.dataset.precio,
            }
            
            
           
            if(arrayCarrito.hasOwnProperty(producto.nombre)){
                producto.cantidad = arrayCarrito[producto.nombre].cantidad+1
               
                
                
            }

            producto.precio = producto.precio * producto.cantidad
           
            arrayCarrito[producto.nombre] = {...producto}
            console.log(arrayCarrito);
          
            localStorage.setItem('Carrito', JSON.stringify(arrayCarrito))
            pintarCarro(arrayCarrito)
        }
    })
 
    


    try {
        arrayProductos.map((el)=>{
            let {id,nombre, imagen, precio, stock,precio_anterior} = el
            cardsOfertas.innerHTML += `
          
                <div class="card" style="width: 18rem;">
                  <img src="${imagen}" class="card-img-top" alt="${nombre}">
                  <div class="card-body">
                    <h5 class="card-title text-center">${nombre}</h5>
      
                  </div>
                  <div>
                  <p class="card-text" style="text-align: center;" ><del>$${precio_anterior}</del></p>
                  
                  <p class="card-text" style="color:lightcoral; font-size:2em; text-align: center;">$${precio}</p>
                  </div>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button data-id="${id}" data-nombre="${nombre}" data-stock="${stock}" data-precio="${precio}" class="btn btn-success me-md-2" type="button">Sumar al carrito</button>
                    </div>
                </div>
  
            `

            
        })
    

    } catch (error) {
    }






    return cardsOfertas
}

export default Ofertas