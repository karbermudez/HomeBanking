//Declaración de variables
var nombreUsuario = "Ileana Martinez";
var saldoCuenta = 23000;
var limiteExtraccion = 1000;

//Función para incrementar dinero en la cuenta

function sumarDinero(ingreseDineroF) {
    saldoCuenta += ingreseDineroF;
}

//Función que resta dinero a la cuenta

function restarDinero(ingreseDineroF) {
    saldoCuenta -= ingreseDineroF;

}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

function iniciarSesion() {
    console.log(iniciarSesion);

    // declarar una contraseña
    var passwordUsuario = 123;
    var password;

    // pedirle al usuario que ingrese contraseña
    password = parseInt(prompt("ingrese su contraseña: "));
    console.log(password);
    console.log(passwordUsuario);

    //si la contraseña es correcta mostrar msj que de la bienvenida
    if (password === passwordUsuario) {
        alert("Bienvenido/a " + nombreUsuario);
    }

    // en caso de ser erronea descontar todo el saldo en pantalla y mostrar alert "se bloqueó x seguridad"
    else {
        alert("usted ha ingresado una contraseña erronea, por seguridad se ha bloqueado su cuenta.");
        saldoCuenta = 0;
    }

}
//Funciones que tenes que completar

function cambiarLimiteDeExtraccion() {
    var ingreseDinero = parseInt(prompt("Cambiar limite de Extracción"));
    limiteExtraccion = ingreseDinero;
    alert("nuevo limite de extracción :" + ingreseDinero);

    actualizarLimiteEnPantalla()


}

// extracción de dinero
function extraerDinero() {
    var ingreseDinero = parseInt(prompt("ingrese el monto a extraer"));
    var total = saldoCuenta - ingreseDinero;

    // limitar la extracción a solo multiplos de 100

    if (ingreseDinero % 100 !== 0) {
        alert("no es multiplo de 100.");
    }
    // limitar extracción de dinero
    else if (ingreseDinero > limiteExtraccion) {
        alert("el monto supera el limite de extracción");

    }
    // consultar si poseo saldo
    else if (ingreseDinero > saldoCuenta) {
        alert("no posee saldo suficiente.");
    }
    // en caso de cumplir las condiciones se extrae el dinero y se devuelven los datos.
    else {
        alert("nuevo saldo: " + total + "\n saldo anterior: " + saldoCuenta + "\n saldo extraido: " + ingreseDinero);
        restarDinero(ingreseDinero);
        // debo actualizar el saldo en pantalla 
        actualizarSaldoEnPantalla();
    }

}

// deposito de dinero
function depositarDinero() {

    var ingreseDinero = parseInt(prompt("ingrese el monto a depositar"));
    var total = saldoCuenta + ingreseDinero;
    alert(" nuevo saldo:  " + total + "\n saldo anterior: " + saldoCuenta + "\n saldo depositado: " + ingreseDinero);
    sumarDinero(ingreseDinero);

    // actualizar el saldo en pantalla
    actualizarSaldoEnPantalla();



}

function pagarServicio() {
    console.log(pagarServicio)
    //declarar variables de los servicios
    var agua = 350;
    var telefono = 425;
    var luz = 210;
    var internet = 510;

    var servicioAPagar = [0, agua, telefono, luz, internet];


    //preguntar al usuario qué servicio desea abonar

    servicioAPagar = (parseInt(prompt("Ingrese el  servicio que desea abonar: " + "\n 1. Agua " + agua + "\n 2. Telefono " + telefono + "\n 3. Luz " + luz + "\n 4. Internet " + internet)));


    // realizar switch para que en cada caso devuelva un mensaje diferente.



    switch (servicioAPagar) {
        case 1:
            alert("servicio abonado: Agua por el valor de:  " + agua + "\n saldo anterior: " + saldoCuenta + "\n nuevo saldo: " + (saldoCuenta -= agua));
            break;

        case 2:
            alert("Servicio abonado: Telefono por el valor de: " + telefono + "\n saldo anterior: " + saldoCuenta + "\n nuevo saldo: " + (saldoCuenta -= telefono));
            break;

        case 3:
            alert("Servicio abonado: Luz por el valor de: " + luz + "\n saldo anterior: " + saldoCuenta + "\n nuevo saldo: " + (saldoCuenta -= luz));
            break;

        case 4:
            alert("Servicio abonado: Internet por el valor de: " + internet + "\n saldo anterior: " + saldoCuenta + "\n nuevo saldo: " + (saldoCuenta -= internet));
            break;

        // si el usuario elige una opción incorrecta mostrar un alert que avise el error
        default:
            alert("no existe servicio a pagar.");
            break;
        

    }
    //actualizar el nuevo saldo en pantalla
    actualizarSaldoEnPantalla();

}

function transferirDinero() {

    //declarar variables de las cuentas amigas
    var cuentaAmiga1 = 1234;
    var cuentaAmiga2 = 4321;
    // pedirle al usuario que ingrese el monto que desea transferir
    var montoATransferir = parseInt(prompt("ingrese el monto que desea transferir: "));
    // verificar si posee saldo, en caso contrario mostrar un alert que lo informe.
    if (montoATransferir > saldoCuenta) {
        alert("no posee saldo suficiente en su cuenta.");
    }
    else {
        var ingreseElNumeroDeCuenta = parseInt(prompt("ingrese el numero de cuenta: "));


        if (ingreseElNumeroDeCuenta == cuentaAmiga1 || ingreseElNumeroDeCuenta == cuentaAmiga2) {
            var saldoAnterior = saldoCuenta;
            saldoCuenta -= montoATransferir;
            alert("monto a transferir: " + montoATransferir + "\n cuenta a transferir: " + ingreseElNumeroDeCuenta + "\n saldo anterior: " + saldoAnterior + "\n saldo actual : " + saldoCuenta);







            actualizarSaldoEnPantalla();
        }
        // en caso de no ser una cuenta amiga mostrar alert que lo avise.    

        else {
            alert("solo puede transferir dinero a cuentas amigas.");


        }

    }

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}