
function mostrarDatos() {

    let entradas = document.getElementById("cantidadEntradas").value 

    let precioEntrada = 200


    // ESTUDIANTE
    let descuentoEstudiante = precioEntrada*0.2

    let pagoEstudiante = descuentoEstudiante*entradas

    //TRAINEE
    let descuentoTrainee = precioEntrada*0.5

    let pagoTrainee = descuentoTrainee*entradas

    //JUNIOR
    let descuentoJunior = precioEntrada*0.85

    let pagoJunior = descuentoJunior*entradas

    //CATEGORIA
    let categoria = document.getElementById("categorias").value

    if(categoria== "estudiante"){

        document.getElementById("textoCambiar").textContent = "Total a pagar: $" + pagoEstudiante

    } else if (categoria=="trainee"){

        document.getElementById("textoCambiar").textContent = "Total a pagar: $" + pagoTrainee

    } else if(categoria=="junior"){

        document.getElementById("textoCambiar").textContent = "Total a pagar: $" + pagoJunior

    } else{

        document.getElementById("textoCambiar").textContent = "Ingrese su categoria para continuar"

    }

}


function borar(){

    // RESET DATOS

    document.getElementById("nombre").value = ""
    document.getElementById("apellido").value = "" 
    document.getElementById("email").value = ""





    document.getElementById("textoCambiar").textContent = "Total a pagar: $"

    document.getElementById("categorias").value = "seleccion-categoria"

    document.getElementById("cantidadEntradas").value = "Cantidad"


}


// ============================================================================================
// PRIMERA FUNCIONALIDAD
// ============================================================================================

// var precioTicket = 200;

// var DescuentoEstudiante = 200*0.8;

// var DescuentoTrainee = 200 * 0.5;

// var DescuentoJunior = 200 * 0.15;

// var cantidadEntradas = document.getElementById("cantidadEntradas")

// const numeroEntradas = Number(cantidadEntradas)

// const botonCalcular = document.getElementById("botonCalcular")

// const categoria = document.getElementById("categoria")

// const totalCompra = document.getElementById("totalCompra")




// function resumen(){

//     if (categoria.value=="estudiante"){

//         console.log(DescuentoEstudiante * numeroEntradas)

//     } else if (categoria.value=="trainee"){

//         console.log(DescuentoTrainee * cantidadEntradas)

//     } else if (categoria.value=="Junior"){

//         console.log(DescuentoJunior * cantidadEntradas)
    
//     }

//     console.log(categoria.value)

//     console.log(cantidadEntradas.value)

// }

// totalCompra.innerHTML = cantidadEntradas.value