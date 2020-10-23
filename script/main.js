
document.addEventListener("DOMContentLoaded", function(event) {
    let catalogo = [{'modelo': 'Model S',
                    'foto': 'model_S',
                    'precio': "79.990",
                    'cantidad': 0 
                    },
                    {'modelo': 'Model 3',
                    'foto': 'model_3',
                    'precio': "49.000",
                    'cantidad': 0 
                    },
                    {'modelo': 'Model X',
                    'foto': 'model_X',
                    'precio': "88.990",
                    'cantidad': 0 
                    },
                    {'modelo': 'Model Y',
                    'foto': 'model_Y',
                    'precio': "64.000",
                    'cantidad': 0 
                    }];
    
    let cajaCatalogo = document.getElementById("catalogo-contenido");                
    let cajaCarrito = document.getElementById("carrito-contenido");                
    
                    
    
    let articulo, articuloImg, articuloTitulo, articuloCantidad;
    let carrito = [];
    
    catalogo.forEach(coche => {
        // Crear articulo
        articulo = document.createElement("article");
        articulo.className = "catalogo-articulo";
        articulo.onclick = function addCarrito() {
            console.log("añadido");
            carrito.push(coche);
            mostrarCarrito(coche);
            console.log(carrito);
        }

        // Crear imagen del articulo
        articuloImg = document.createElement("img");
        articuloImg.className = "articulo-img";
        articuloImg.src = "./img/" + coche.foto + ".jpg";

        // Crear titulo y añadir texto
        articuloTitulo = document.createElement("p");
        articuloTitulo.className = "articulo-titulo";
        tituloTexto = document.createTextNode(coche.modelo);
        articuloTitulo.appendChild(tituloTexto);

        // Crear precio y añadir texto
        articuloPrecio = document.createElement("p");
        articuloPrecio.className = "articulo-precio";
        precioTexto = document.createTextNode(coche.precio + " €");
        articuloPrecio.appendChild(precioTexto);


        // Insertar elementos al articulo
        articulo.appendChild(articuloImg);
        articulo.appendChild(articuloTitulo);
        articulo.appendChild(articuloPrecio);

        // Insertar articulo a caja catalogo
        cajaCatalogo.appendChild(articulo);

    });

    function mostrarCarrito(coche) {
        console.log("dentro");
        cajaCarrito.innerHTML = "";
        carrito.forEach(coche => {
            // Suma cantidad
            coche.cantidad++;
            // Crear articulo
            articulo = document.createElement("article");
            articulo.className = "carrito-articulo";
            // articulo.onclick = function addCarrito() {
            //     console.log("añadido");
            //     carrito.push(coche);
            //     console.log(carrito);
            // }
    
            // Crear imagen del articulo
            articuloImg = document.createElement("img");
            articuloImg.className = "articulo-img";
            articuloImg.src = "./img/" + coche.foto + ".jpg";
    
            // Crear titulo y añadir texto
            articuloTitulo = document.createElement("p");
            articuloTitulo.className = "articulo-titulo";
            tituloTexto = document.createTextNode(coche.modelo);
            articuloTitulo.appendChild(tituloTexto);
    
            // Crear precio y añadir texto
            articuloPrecio = document.createElement("p");
            articuloPrecio.className = "articulo-precio";
            precioTexto = document.createTextNode(coche.precio + " €");
            articuloPrecio.appendChild(precioTexto);

            // Crear cantidad en el carrito
            articuloCantidad = document.createElement("p");
            articuloCantidad.className = "articulo-cantidad";
            cantidadTexto = document.createTextNode(coche.cantidad);
            articuloCantidad.appendChild(cantidadTexto);
    
    
            // Insertar elementos al articulo
            articulo.appendChild(articuloImg);
            articulo.appendChild(articuloTitulo);
            articulo.appendChild(articuloPrecio);
            articulo.appendChild(articuloCantidad);
    
            // Insertar articulo a caja catalogo
            cajaCarrito.appendChild(articulo);
    
        });
    }
    
    
});


           