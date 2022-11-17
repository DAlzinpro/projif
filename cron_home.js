"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;//Quantos milésimos valem 1 segundo?
var cron;

//Inicia o temporizador
function start() {
    clearInterval(cron);
    cron = setInterval(timer, 1000)
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 60) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 60) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    //Retorna o valor tratado
    return format;

    function gay () {
        var abb = document.getElementById("ab").innerHTML = ""
        var acc = document.getElementById("ac").innerHTML = "Não peguei do google"
    }

    
}



function oi2(){
    document.getElementById("agr").classList.remove('wrapper','wrapper2')
    document.getElementById("agr").classList.add("wrapper3")
    document.body.classList.add('darki')
    document.body.classList.remove('darki2')
}



function oi(){
document.getElementById("agr").classList.remove('wrapper','wrapper3')
document.getElementById("agr").classList.add("wrapper2")
document.body.classList.add('darki2')
document.body.classList.remove('darki')
}
var ballw = document.getElementById("a")
ballw.addEventListener("click",oi)
