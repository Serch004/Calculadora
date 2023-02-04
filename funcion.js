var op1;
var op2;
var signo

function init(){
    //Variables
    var resultado = document.getElementById("resultado");
    var Del = document.getElementById("borrar");
    var reset = document.getElementById("reset");
    var punto = document.getElementById("punto");
    var division = document.getElementById("division");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var suma = document.getElementById("suma");
    var dobleCERO = document.getElementById("dobleCero");
    var cero = document.getElementById("cero");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");

        // Eventos 
        uno.onclick = function(e){
            resultado.textContent = resultado.textContent + "1"
        }
        dos.onclick = function(e){
            resultado.textContent = resultado.textContent + "2"
        }
        tres.onclick = function(e){
            resultado.textContent = resultado.textContent + "3"
        }
        cuatro.onclick = function(e){
            resultado.textContent = resultado.textContent + "4"
        }
        cinco.onclick = function(e){
            resultado.textContent = resultado.textContent + "5"
        }
        seis.onclick = function(e){
            resultado.textContent = resultado.textContent + "6"
        }
        siete.onclick = function(e){
            resultado.textContent = resultado.textContent + "7"
        }
        ocho.onclick = function(e){
            resultado.textContent = resultado.textContent + "8"
        }
        nueve.onclick = function(e){
            resultado.textContent = resultado.textContent + "9"
        }
        cero.onclick = function(e){
            resultado.textContent = resultado.textContent + "0"
        }
        dobleCERO.onclick = function(e){
            resultado.textContent = resultado.textContent + "00"
        }
        punto.onclick = function(e){
            resultado.textContent = resultado.textContent + "."
        }

        reset.onclick = function(e){
            resetear();
        }
        Del.onclick = function(e){
                borrar();
        }
        suma.onclick = function(e){
            op1 = resultado.textContent;
            signo = "+";
            limpiar();
        }
        resta.onclick = function(e){
            op1 = resultado.textContent;
            signo = "-";
            limpiar();
        }
        multiplicacion.onclick = function(e){
            op1 = resultado.textContent;
            signo = "*";
            limpiar();
        }
        division.onclick = function(e){
            op1 = resultado.textContent;
            signo = "/";
            limpiar();
        }
        igual.onclick = function(e){
            op2 = resultado.textContent;
            resolver();
        }
    }

    function limpiar(){
        resultado.textContent = "";
    }

    function resetear(){
        resultado.textContent = "";
        op1 = 0;
        op2 = 0;
        signo = "";
    }

    function borrar(){
        resultado.textContent = "";
        op1 = 0;
        op2 = 0;
        signo = "";
    }

    function resolver(){
        var res = 0;
        switch(signo){
            case "+":
                res = parseFloat(op1) + parseFloat(op2);
                break;

            case "-":
                res = parseFloat(op1) - parseFloat(op2);
                break;

            case "*":
                res = parseFloat(op1) * parseFloat(op2);
                break;

            case "/":
                res = parseFloat(op1) / parseFloat(op2);
                break;
        }
        resetear();
        resultado.textContent = res;

        borrar();
        resultado.textContent = res;
    }