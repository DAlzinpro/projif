
var sortead = ["1243","1234","1324","1342","1423","1432","2134","2143","2314","2341","2431","2413","3124","3142","3214","3241","3421","3412","4132","4123","4213","4231","4321","4312"];

var numb = Math.floor(Math.random() * sortead.length);
var numbT = sortead[numb]



    var pos1 = numbT.indexOf("1");
    var pos2 = numbT.indexOf("2");
    var pos3 = numbT.indexOf("3");
    var pos4 = numbT.indexOf("4");

    function game(){
        const res = document.getElementById("inapst").value
        var psc1 = res.indexOf("1");
        if(psc1 == pos1){
            var rsp = document.getElementById("answ1").innerHTML = "Number 1 Correct✔️"
        }

        const res2 = document.getElementById("inapst").value
        var psc2 = res.indexOf("2");
        if(psc2 == pos2){
            var rsp = document.getElementById("answ2").innerHTML = "Number 2 Correct✔️"
        }

        const res3 = document.getElementById("inapst").value
        var psc3 = res.indexOf("3");
        if(psc3 == pos3){
            var rsp = document.getElementById("answ3").innerHTML = "Number 3 Correct✔️"
        }

        const res4 = document.getElementById("inapst").value
        var psc4 = res.indexOf("4");
        if(psc4 == pos4){
            var rsp = document.getElementById("answ4").innerHTML = "Number 4 Correct✔️"
        }

        const res5 = document.getElementById("inapst").value
        if (res5 != "1234" && res5 != "1243" && res5 != "1324" && res5 != "1342" && res5 != "1432" && res5 != "1423" && res5 != "2134" && res5 != "2143" && res5 != "2314" && res5 != "2341" && res5 != "2431" && res5 != "2413" && res5 != "3124" && res5 != "3142" && res5 != "3214" && res5 != "3241" && res5 != "3421" && res5 != "3412" && res5 != "4132" && res5 != "4123" && res5 != "4213" && res5 != "4231" && res5 != "4321" && res5 != "4312" && res5 != "22"){
            alert("Nao use caracteres diferentes de 1,2,3,4")
            const rsp = document.getElementById("inapst").value = ""
        }
        if (psc1 != pos1 && psc2 != pos2 && psc3 != pos3 && psc4 != pos4) {
            alert("Errado, tente novamente.")
        }
    }   
    function sort() {
        let numero2 = Math.floor(Math.random() * sorteados.length);
        numbT = sortead[numero2]
        pos1 = num2.indexOf("1");
        pos2 = num2.indexOf("2");
        pos3 = num2.indexOf("3");
        pos4 = num2.indexOf("4");
    }

    console.log(numbT)
function rese(){
    var ans1 = document.getElementById("answ1").innerHTML = " "
    var ans2 = document.getElementById("answ2").innerHTML = " "
    var ans3 = document.getElementById("answ3").innerHTML = " "
    var ans4 = document.getElementById("answ4").innerHTML = " "
    const res = document.getElementById("inapst").value = " "
    sort()
} 

