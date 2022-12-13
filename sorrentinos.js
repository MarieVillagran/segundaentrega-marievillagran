
solicitarNombre();

function solicitarNombre() {
    let nombre = prompt("Ingrese el nombre");
    console.log("-->Ingresaste el nombre", nombre);
    let apellido = prompt("Ingrese el apellido");
    console.log("-->Ingresaste el apellido", apellido);

    //Se valida que se ingresen datos del cliente

    if ((nombre != "") && (apellido != "")) {
        //si ingreso ambos parametros mostrar mensaje de bienvenida
        console.log("-->Bienvenida/o ", nombre, apellido);
        alert("Bienvenida/o " + nombre + " " + apellido + " que deseas realizar")
        console.log("En nuestra pagina", " podrás realizar diferentes operaciones: " + "\n\n" + "1.- Consultar Precios" + "\n" + "2.- Comprar" + "\n" + "3.- Salir" + "\n");
        alert("En nuestra pagina podrás realizar diferentes operaciones: " + "\n\n" + "1.- Consultar Precios" + "\n" + "2.- Comprar" + "\n" + "3.- Salir");
        elegirOperacion();
    } else {
        //sino menciona un error
        alert("Error: debes ingresar ambos parametros :(");
    }
}

function elegirOperacion() {
    //Funcion que permite seleccionar las operaciones a realizar
    let operacion = parseInt(prompt("Dime el numero de lo que quieres hacer"));
    switch (operacion) {
        case (1):
            console.log("-->Elegiste la operacion Consultar precios");
            alert("Elegiste la operacion Consultar precios.");
            consultarPrecio();
            break;
        case (2):
            console.log("-->Elegiste la operacion Comprar");
            alert("Elegiste la operacion Comprar.");
            comprar();
            break;
        case (3):
            console.log("-->Elegiste la operacion Salir");
            alert("Gracias por visitar nuestra web! Hasta pronto")
            break;
        default:
            console.log("--> Debes elegir una de las opciones.");
            break;
    }
}

function consultarPrecio() {
    //Consulta precios de variedades con que se trabajan
    console.log("Precio Unitario:" + "\n" + "Clasicos $800" + "\n" + "Nuez $900" + "\n" + "Verdura $800" + "\n" + "Calabaza $800" + "\n" + "Gourmet $850" + "\n" + "Ternera $1000");
    alert("Precio Unitario:" + "\n" + "Clasicos $800" + "\n" + "Nuez $900" + "\n" + "Verdura $800" + "\n" + "Calabaza $800" + "\n" + "Gourmet $850" + "\n" + "Ternera $1000");
    const sorrentinos = [
        { nombre: "clasicos", precio: 800 },
        { nombre: "Nuez", precio: 900 },
        { nombre: "verdura", precio: 800 },
        { nombre: "calabaza", precio: 800 },
        { nombre: "gourmet", precio: 850 },
        { nombre: "ternera", precio: 1000 },
    ];
    //Muestra las variedades en tabla
    console.table(sorrentinos);
    
    //Consulta precios de promociones con que se trabajan
    console.log("Promociones:" + "\n" + "1-Equipate: 3 docenas(incluye una de Ternera) a $2400" + "\n" + "2-Equipa tu heladera: 6 docenas(incluye dos de Ternera) a $4300" + "\n" + "3-Con amigos y familia: 8 docenas(incluye tres de Ternera) a $5800" + "\n");
    alert("Promociones:" + "\n" + "1-Equipate: 3 docenas(incluye una de Ternera) a $2400" + "\n" + "2-Equipa tu heladera: 6 docenas(incluye dos de Ternera) a $4300" + "\n" + "3-Con amigos y familia: 8 docenas(incluye tres de Ternera) a $5800" + "\n");
    const promociones = [
        { nombre: "Equipate", precio: 2400, promo: "3 docenas(incluye una de Ternera)" },
        { nombre: "Equipa tu heladera", precio: 4300, promo: "6 docenas(incluye dos de Ternera)" },
        { nombre: "Con amigos y familia", precio: 5800, promo: "8 docenas(incluye tres de Ternera)" },
    ];
    //Muestra las promociones en tabla
    console.table(promociones);
}

function comprar() {
    const sorrentinos = [
        { nombre: "clasicos", precio: 800 },
        { nombre: "Nuez", precio: 900 },
        { nombre: "verdura", precio: 800 },
        { nombre: "calabaza", precio: 800 },
        { nombre: "gourmet", precio: 850 },
        { nombre: "ternera", precio: 1000 },

    ];
    console.table(sorrentinos);
    //pedidos que se realizan
    let pedido = []
    
    //Se indica y aclara ue se trabaja en minusculas
    let opcion = prompt("Desea realizar un pedido. Indique si o no" + "\n" + "\n" + "Importante: ingresa todos los datos en minuscula")

    while (opcion != "si" && opcion != "no") {
        alert("Por favor indique si o no");
        opcion = prompt("Desea realizar un pedido. Indique si o no")
    }

    if (opcion == "si") {
        alert("A continuacion muestra lista de sorrentinos");
        let todoslosSorrentinos = sorrentinos.map((sorrentino) => sorrentino.nombre + " " + sorrentino.precio + "$");
        alert(todoslosSorrentinos.join(" - "));
    } else if (opcion == "no") {
        alert("Gracias por visitar nuestra web.");
    }

    while (opcion != "no") {
        let sorrentino = prompt("Agrega sorrentinos a tu pedido");
        let precio = 0;

        if (sorrentino == "clasicos" || sorrentino == "nuez" || sorrentino == "verdura" || sorrentino == "calabaza" || sorrentino == "gourmet" || sorrentino == "ternera") {
            switch (sorrentino) {
                case "clasicos":
                    precio = 800;
                    break;
                case "nuez":
                    precio = 900;
                    break;
                case "verdura":
                    precio = 800;
                    break;
                case "calabaza":
                    precio = 800;
                    break;
                case "gourmet":
                    precio = 950;
                    break;
                case "ternera":
                    precio = 1000;
                    break;
                default:
                    break;
            }
            let cantidad = parseInt(prompt("Cuantas docenas quiere llevar"))
            pedido.push({ sorrentino, cantidad, precio })
            console.log(pedido);
        } else {
            alert("No tenemos esta variedad")
        }
        opcion = prompt("Desea seguir comprando?");
        while (opcion === "no") {
            alert("Gracias por la compra! Hasta pronto")
            pedido.forEach((pedidoFinal) => {
                console.log(`sorrentino: ${pedidoFinal.sorrentino}, unidades: ${pedidoFinal.cantidad}, total a pagar por pedido ${pedidoFinal.cantidad * pedidoFinal.precio}}`)
            })
            break;

        }
    }
    //Se utiliza el metodo reduce
    const total = pedido.reduce((acu, el) => acu + el.precio * el.cantidad, 0);
    console.log("el total a pagar por su pedido es: ", total);
    alert("El total a pagar por su pedido es: " + total);
    let pago = prompt("Con cuanto abonarias?");

    if (pago < total) {
        alert("Tu Saldo es insuficiente para la compra")
    }
    if (pago >= total) {
        console.log("Tu compra se finalizo con exito. Tu vuelto es: " + (parseInt(pago) - parseInt(total)));
        alert(" Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(total)));
    }

}