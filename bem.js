function sub() {
    var check1 = document.getElementById("dif")
    var check2 = document.getElementById("fac")

    if (check2.checked == true){
        window.open("https://dalzinpro.github.io/projif/jogo.html")
    }if (check1.checked == true){
        window.open("https://dalzinpro.github.io/projif/dif.html")
    }
        if (check1.checked == true && check2.checked == true){
        window.open("https://dalzinpro.github.io/projif/dif.html")
        window.open("https://dalzinpro.github.io/projif/jogo.html")
    }
}
