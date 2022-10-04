const AsideProductos = (donde)=>{
    let proce, mother, gpu = ''

    const divAside = document.createElement('aside')
    if (donde == 'proce'){
        proce = 'active'
    }
    else if(donde == 'mother'){
        mother = 'active'
    }
    else if(donde == 'gpu'){
        gpu = 'active'
    }
    divAside.setAttribute('class','col-3 aside')
    divAside.innerHTML = `
    
        <div class="list-group">
            <a href="#/procesadores" class="list-group-item list-group-item-action ${proce}">
            Procesadores
            </a>
            <a href="#/motherboards" class="list-group-item list-group-item-action ${mother}">Motherboards</a>
            <a href="#/tarjetasgraficas" class="list-group-item list-group-item-action ${gpu}">Tarjetas Graficas</a>
          </div>
   
    
    `


    return divAside
}

export default AsideProductos