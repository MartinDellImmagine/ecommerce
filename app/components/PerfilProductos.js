const PerfilProductos = (foto, altFoto)=>{
    const divPerfilfoto = document.createElement('div')
    divPerfilfoto.innerHTML = `
    <div class="row justify-content-center ">
        <img class="perfil-photo" src="${foto}" alt="${altFoto}">
    </div>
    
    `

    return divPerfilfoto
}


export default PerfilProductos