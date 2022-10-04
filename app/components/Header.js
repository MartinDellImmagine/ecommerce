


const Header = ()=>{
    const header = document.createElement('header')
    header.innerHTML = `
    <div class"container">
        
        
            <h2 class="title">SilivaStore</h2>
            <div class"container">
                <div class="input-group input-group-sm mb-3">
                    <input id="inputBusqueda" type="text" class="form-control" placeholder="Busqueda" aria-label="Busqueda" aria-describedby="basic-addon1">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#cartModal">
                    <i class="bi bi-cart-fill"></i>
                    </button>
                </div>
            </div>

           
    </div>
    `

    return header
}


export default Header