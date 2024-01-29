let numeroMaximo = 10;
let listaNumerosSorteados = [];
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log('numero de intentos = '+intentos);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste, ese era el número. Lo hiciste después de ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p','El número es menor');
    }else{
        if(numeroDeUsuario<numeroSecreto)
        asignarTextoElemento('p','El numero es mayor');
    }
    intentos++; 
    limpiarCaja();
    }   
    return;
}

function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    
    //numero maximo, variable que es para tomar numeros random
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log("Este es el numero secreto" +" "+ numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros:
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya jugaste todos los números posibles');
    } else {
    //si el valor generado esta en la lista hago algo o no
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego del número secreto");
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja, reune el juego de nuevo e inicializa en contador de intentos
    limpiarCaja();
    condicionesIniciales();
    verificarIntento();
    intentos= 1;
    //deshabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();

