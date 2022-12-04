var sorteados = ["1234","1243","1324","1342","1432","1423","2134","2143","2314","2341","2431","2413","3124","3142","3214","3241","3421","3412","4132","4123","4213","4231","4321","4312"];
var numero = Math.floor(Math.random() * sorteados.length);
console.log(sorteados[numero]); // resultado aleatório
var num2 = sorteados[numero]
function rest() {
    var respo1 = document.getElementById("reposta").innerHTML = " "
    var respo2 = document.getElementById("reposta2").innerHTML = " "
    var respo3 = document.getElementById("reposta3").innerHTML = " "
    var respo4 = document.getElementById("reposta4").innerHTML = " "
    const res = document.getElementById("chute").value = ""
    sort()   
}   var posicao1 = num2.indexOf("1");
    var posicao2 = num2.indexOf("2");
    var posicao3 = num2.indexOf("3");
    var posicao4 = num2.indexOf("4");
function bah(){
    const res = document.getElementById("chute").value
    var posica1 = res.indexOf("1");
    if(posica1 == posicao1){
        var respo = document.getElementById("reposta").innerHTML = "acertou o numero 1!"
    }
    const res2 = document.getElementById("chute").value
    var posica2= res2.indexOf("2");
    if(posica2 == posicao2){
        var respo = document.getElementById("reposta2").innerHTML = "acertou o numero 2!"
    }
    const res3 = document.getElementById("chute").value
    var posica3= res3.indexOf("3");
    if(posica3 == posicao3){
        var respo = document.getElementById("reposta3").innerHTML = "acertou o numero 3!"
    }
    const res4 = document.getElementById("chute").value
    var posica4= res4.indexOf("4");
    if(posica4 == posicao4){
        var respo = document.getElementById("reposta4").innerHTML = "acertou o numero 4!"
    }
    const res5 = document.getElementById("chute").value
    if (res5 != "1234" && res5 != "1243" && res5 != "1324" && res5 != "1342" && res5 != "1432" && res5 != "1423" && res5 != "2134" && res5 != "2143" && res5 != "2314" && res5 != "2341" && res5 != "2431" && res5 != "2413" && res5 != "3124" && res5 != "3142" && res5 != "3214" && res5 != "3241" && res5 != "3421" && res5 != "3412" && res5 != "4132" && res5 != "4123" && res5 != "4213" && res5 != "4231" && res5 != "4321" && res5 != "4312" && res5 != "22"){
        alert("Erro!,apenas caracteres 1,2,3,4")
        const res = document.getElementById("chute").value = ""
    }
    if (posica1 != posicao1 && posica2 != posicao2 && posica3 != posicao3 && posica4 != posicao4) {
        alert("errou")
    }
    if (res == "22"){
        const res = document.getElementById("chute").value = ""
        var respo = document.getElementById("reposta4").innerHTML = num2
    }
    
    
    }
    document.addEventListener("keypress", function(e) {
        if(e.key === 'Enter') {
        
            var btn = document.querySelector("#submit");
          
          btn.click();
        
        }
      });
      function sort() {
        let numero2 = Math.floor(Math.random() * sorteados.length);
        num2 = sorteados[numero2]
        posicao1 = num2.indexOf("1");
        posicao2 = num2.indexOf("2");
        posicao3 = num2.indexOf("3");
        posicao4 = num2.indexOf("4");
    }
