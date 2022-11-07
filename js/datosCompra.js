
let btnResumen = document.getElementById("btnResumen");
let btnBorrar = document.getElementById("btnBorrar");



let precioTicket = 200;
let cantidad = parseInt(document.getElementById("inputCantidad").value);

function calcularDescuento (pagarTotal) {

    let monto = 0;

    categoria = document.getElementById("inputCategoria").value;
    console.log(categoria);
    if (categoria == 'Estudiante') {
        monto = (pagarTotal) - (pagarTotal) * 0.8;
    } else {
        if (categoria == 'Trainee') {
            monto = (pagarTotal) - (pagarTotal) * 0.5;
        }
        else {
            monto = (pagarTotal) - (pagarTotal) * 0.15;
        }
    }

    return monto;
}

function total() {
    let pagarTotal = 200 * parseInt(document.getElementById("inputCantidad").value);
    let pagarDto = calcularDescuento(pagarTotal);
    
    document.getElementById("precioTotal").innerHTML = pagarDto;
    
}

function borrar() {
    document.getElementById("inputNombre").value = "";
    document.getElementById("inputApellido").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputCantidad").value = "";
    document.getElementById("precioTotal").innerHTML = 0;
}

btnResumen.onclick = total;

btnBorrar.onclick = borrar;


