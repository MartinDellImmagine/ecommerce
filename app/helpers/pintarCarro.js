



    function pintarCarro(datos) {
        let tbody = document.querySelector('#tbody')
        tbody.innerHTML = ""
        for(const key in datos){
            let {id,nombre, precio, cantidad} = datos[key]
            tbody.innerHTML += `
                <tr>
                    <th scope="row">${id}</th>
                    <td>${nombre}</td>
                    <td>$ARS ${precio}</td>
                    <td>${cantidad}</td>
                    <td>
                       
                        <button class="btn btn-danger btn-resta">-</button>
                        <button class="btn btn-success btn-suma">+</button>
                    </td>
                </tr>

            `
        }
        
    }

export default pintarCarro