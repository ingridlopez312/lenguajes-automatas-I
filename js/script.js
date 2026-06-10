function buscarUnidad(){
    let texto = document.getElementById("buscador")?.value.toLowerCase();
    let tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach(function(tarjeta){
        let contenido = tarjeta.textContent.toLowerCase();

        if(contenido.includes(texto)){
            tarjeta.style.display = "block";
        }else{
            tarjeta.style.display = "none";
        }
    });
}

function validarCorreo(){
    let correo = document.getElementById("correo").value;
    let resultado = document.getElementById("resultadoCorreo");

    let patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(patron.test(correo)){
        resultado.innerHTML = "✓ Correo válido";
        resultado.style.color = "green";
        resultado.style.fontWeight = "bold";
    }else{
        resultado.innerHTML = "✗ Correo inválido";
        resultado.style.color = "red";
        resultado.style.fontWeight = "bold";
    }
}

function analizarLexico(){
    let codigo = document.getElementById("codigoLexico").value;
    let resultado = document.getElementById("resultadoLexico");

    let partes = codigo.match(/[a-zA-Z_][a-zA-Z0-9_]*|\d+|==|=|\+|-|\*|\/|;|\(|\)/g);

    resultado.innerHTML = "";

    if(!partes){
        resultado.innerHTML = "<p>No se encontraron tokens.</p>";
        return;
    }

    partes.forEach(function(parte){
        let tipo = "";

        if(["int", "float", "double", "char", "if", "else", "while", "for"].includes(parte)){
            tipo = "Palabra reservada";
        }else if(/^[0-9]+$/.test(parte)){
            tipo = "Número entero";
        }else if(["=", "+", "-", "*", "/", "=="].includes(parte)){
            tipo = "Operador";
        }else if(parte === ";"){
            tipo = "Punto y coma";
        }else{
            tipo = "Identificador";
        }

        resultado.innerHTML += `<p><b>${parte}</b> → ${tipo}</p>`;
    });
}

let posicionCabezal = 2;

function actualizarCinta(){
    for(let i = 0; i <= 4; i++){
        let celda = document.getElementById("c" + i);
        if(celda){
            celda.classList.remove("activa");
        }
    }

    let actual = document.getElementById("c" + posicionCabezal);
    if(actual){
        actual.classList.add("activa");
    }

    let estado = document.getElementById("estadoActual");
    if(estado){
        estado.textContent = "q" + posicionCabezal;
    }
}

function moverIzquierda(){
    if(posicionCabezal > 0){
        posicionCabezal--;
        actualizarCinta();
    }
}

function moverDerecha(){
    if(posicionCabezal < 4){
        posicionCabezal++;
        actualizarCinta();
    }
}

function buscarGlosario(){
    let texto = document.getElementById("buscadorGlosario").value.toLowerCase();
    let conceptos = document.querySelectorAll(".concepto");

    conceptos.forEach(function(concepto){
        let contenido = concepto.textContent.toLowerCase();

        if(contenido.includes(texto)){
            concepto.style.display = "block";
        }else{
            concepto.style.display = "none";
        }
    });
}

function calificarQuiz(){
    let puntaje = 0;
    let total = 10;

    for(let i = 1; i <= total; i++){
        let respuesta = document.querySelector('input[name="p' + i + '"]:checked');

        if(respuesta){
            puntaje += parseInt(respuesta.value);
        }
    }

    let mensaje = "";

    if(puntaje <= 4){
        mensaje = "Necesitas reforzar algunos conceptos.";
    }else if(puntaje <= 7){
        mensaje = "Buen desempeño, vas por buen camino.";
    }else{
        mensaje = "Excelente dominio de Lenguajes y Autómatas I.";
    }

    document.getElementById("resultadoQuiz").innerHTML =
        "Tu resultado fue: " + puntaje + " / " + total + "<br>" + mensaje;
}

function validarTelefono(){
    let telefono = document.getElementById("telefono").value;
    let resultado = document.getElementById("resultadoTelefono");
    let patron = /^[0-9]{10}$/;

    if(patron.test(telefono)){
        resultado.innerHTML = "✓ Teléfono válido";
        resultado.style.color = "green";
        resultado.style.fontWeight = "bold";
    }else{
        resultado.innerHTML = "✗ Teléfono inválido. Debe tener exactamente 10 dígitos.";
        resultado.style.color = "red";
        resultado.style.fontWeight = "bold";
    }
}

function validarCURP(){
    let curp = document.getElementById("curp").value.toUpperCase();
    let resultado = document.getElementById("resultadoCURP");
    let patron = /^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[A-Z0-9]{2}$/;

    if(patron.test(curp)){
        resultado.innerHTML = "✓ CURP con formato válido";
        resultado.style.color = "green";
        resultado.style.fontWeight = "bold";
    }else{
        resultado.innerHTML = "✗ CURP inválida. Revisa el formato.";
        resultado.style.color = "red";
        resultado.style.fontWeight = "bold";
    }
}

function validarRFC(){
    let rfc = document.getElementById("rfc").value.toUpperCase();
    let resultado = document.getElementById("resultadoRFC");
    let patron = /^[A-ZÑ&]{3,4}[0-9]{6}[A-Z0-9]{3}$/;

    if(patron.test(rfc)){
        resultado.innerHTML = "✓ RFC con formato válido";
        resultado.style.color = "green";
        resultado.style.fontWeight = "bold";
    }else{
        resultado.innerHTML = "✗ RFC inválido. Revisa el formato.";
        resultado.style.color = "red";
        resultado.style.fontWeight = "bold";
    }
}