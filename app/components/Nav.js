



const Header = ()=>{
    let Nav = document.createElement('header')

    Nav.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="./index.html">SilivaStore</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-3 mb-lg-0">

          <li class="nav-item">
            <a class="nav-link" href="#">Contacto</a>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#/procesadores">Procesadores</a></li>
            <li><a class="dropdown-item" href="#">Motherboards</a></li>
            <li><a class="dropdown-item" href="#">Tarjetas Graficas</a></li>
          </ul>
        </li>
        
        </ul>
        <span class="navbar-text">
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#carroModal">
            <i class="bi bi-cart-fill"><span class"nav-link my-4"> Carro</span></i>
            </button>
        </span>
      </div>
    </div>
  </nav>
  <!-- Modal -->
  <div class="modal fade" id="carroModal" tabindex="-1" aria-labelledby="carroModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody id="tbody">
          
        </tbody>
      </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-outline-success">Pasar a comprar</button>
        </div>
      </div>
    </div>
  </div>
    `
    
    

    return Nav;
}


export default Header