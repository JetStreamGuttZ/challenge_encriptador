let textoResultado = document.querySelector(".textoResultado");
let textoIngresado = document.querySelector(".ingresoDeTexto");

function cifrarTexto(encriptado){
    let texto = encriptado;
    let textoCifrado = "";
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoCifrado = textoCifrado + "ai";
        }
        else if(texto[i] == "e"){
            textoCifrado = textoCifrado + "enter";
        }
        else if(texto[i] == "i"){
            textoCifrado = textoCifrado + "imes";
        }
        else if(texto[i] == "o"){
            textoCifrado = textoCifrado + "ober";
        }
        else if(texto[i] == "u"){
            textoCifrado = textoCifrado + "ufat";
        }
        else{
            textoCifrado = textoCifrado + texto[i];
        }
    }
    return textoCifrado;
}

function desencriptarTexto(desencriptado){
    texto = desencriptado;
    let  matrizDesencriptar = [["ai","a"],["enter","e"],["imes","i"],["ober","o"],["ufat","u"]];
    for(var i=0; i < matrizDesencriptar.length; i++){
        if(texto.includes(matrizDesencriptar[i][0])){
            texto = texto.replaceAll(matrizDesencriptar[i][0],matrizDesencriptar[i][1]);
        }
    }
return texto;
}

function mostrarCifrado() {
        let textoCifrado = cifrarTexto(obtenerTexto());
        if(textoCifrado != ""){
            desaparecer();
            textoResultado.innerHTML = textoCifrado;
            textoIngresado.value = "";
        }
        else{
            aparecer();
        }
}

function desencriptar(){
    let textoDescifrado = desencriptarTexto(obtenerTexto());
    if(textoDescifrado != ""){
        textoResultado.innerHTML = textoDescifrado;
        textoIngresado.value = "";
    }
    else{
        aparecer();
    }
}

function desaparecer(){
    document.getElementById('mensajesCuadroBlanco').style.display = 'none';
    document.getElementById('botonCopiar').style.display = 'block';
    document.getElementById('textoResultado').style.display = 'block';
}

function aparecer(){
    document.getElementById('mensajesCuadroBlanco').style.display = 'block';
    document.getElementById('botonCopiar').style.display = 'none';
    document.getElementById('textoResultado').style.display = 'none';
}

function obtenerTexto(){
    let ingresoDeTexto = document.querySelector(".ingresoDeTexto").value;
    return ingresoDeTexto;
}

function devolverTexto(){
    let devolverTexto = document.querySelector(".textoResultado").value;
    return devolverTexto;
}

function copiar(){
    let textoCopiado = devolverTexto();
    console.log(textoCopiado);
    navigator.clipboard.writeText(textoCopiado).then(
        () => {
          /* clipboard successfully set */
        },
        () => {
          /* clipboard write failed */
        },
      );
}