const pasarAcomprar = ()=>{

    document.addEventListener('click',(event)=>{
        if (event.target.className == "btn btn-outline-success"){
            console.log('hice click');
            window.location = '#/comprar'
            
            
        }
})}


export default pasarAcomprar