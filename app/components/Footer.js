




const Footer = ()=>{
    const footer = document.createElement('footer')
    footer.setAttribute('class','bg-dark text-white pt-5 pb-4 mt-5')
    footer.innerHTML = `
    

      <div class="container text-center text-md-left">
          <div class="row text-center text-md-left">
              <div class="col-md-3 col-lg-3 col-xl-3">
                  <h5 class="text-uppercase mb-4 font-monospace text-warning">SilivaStore</h5>
                  <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quos itaque accusamus alias fugit dolores expedita sequi ad consequuntur ullam.</p>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3 ">
                  <h5 class="text-uppercase mb-4 font-monospace text-warning">Productos</h5>
                  <p>
                      <a href="./pages/procesador.html" class="text-white" style="text-decoration:none ;">Procesadores</a>
                  </p>
                  <p>
                      <a href="./pages/mothers.html" class="text-white" style="text-decoration:none ;">Motherboards</a>
                  </p>
                  <p>
                      <a href="./pages/ram.html" class="text-white" style="text-decoration:none ;">Memorias RAM</a>
                  </p>
                  <p>
                      <a href="./pages/gpu.html" class="text-white" style="text-decoration:none ;">Placas de video</a>
                  </p>


              </div>

              <div class="col-md-3 col-lg-3 col-xl-3">
                  <h5 class="text-uppercase mb-4 font-monospace text-warning">Ayuda</h5>
                  <p>
                      <a href="./pages/contacto.html" class="text-white" style="text-decoration:none ;">Contacto</a>
                  </p>

              </div>
              <div class="col-md-3 col-lg-3 col-xl-3">
                  <h5 class="text-uppercase mb-4 font-monospace text-warning">Redes sociales</h5>


                  <i class="bi bi-instagram" id="instagram"><a  href="https://instagram.com/" style="text-decoration:none ; color: white;" target="_blank">  Instagram</a></i><br><br>
              
                  <i class="bi bi-twitter" id="twitter"><a href="https://twitter.com/" style="text-decoration:none ; color: white;" target="_blank">  Twitter</a></i><br><br>
                 
                  <i class="bi bi-github" id="github"><a href="https://github.com" style="text-decoration:none ; color: white;" target="_blank">  Github</a></i><br><br>
                
                  <i class="bi bi-whatsapp" id="whatsapp"><a href="https://web.whatsapp.com/" style="text-decoration:none ; color: white;" target="_blank">  Whatsapp</a></i><br><br>
              

          </div>

      </div>


    `


    return footer
}

export default Footer