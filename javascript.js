const $trs = document.querySelectorAll("tbody tr")
const $form = document.forms["imc"]
const $inputPeso =  document.querySelector("input[name='peso']")                      
const $inputAltura =  document.querySelector("input[name='altura']")     
const $btnCalcular = document.querySelector("#calcular")       
const $btnReiniciar = document.querySelector("#reiniciar")       

$form.addEventListener("change", reCalcular)
$btnCalcular.addEventListener("click", classificacao)
$btnReiniciar.addEventListener("click", reiniciar)


function reiniciar () {
    $inputPeso.value = '';
    $inputAltura.value = '';
    document.querySelector(".active").classList.remove("active")
}

function reCalcular () {
    if(document.querySelector(".active")){
        document.querySelector(".active").classList.remove("active")
    }
}

function calculaImc() {
    var peso = parseFloat($inputPeso.value);
    var altura = parseFloat($inputAltura.value);

    var imc = (peso / altura ** 2).toFixed(2);
    return imc;
}

function classificacao() {
    var resultado = calculaImc()

    if (resultado < 17) {
        $trs[0].classList.add("active");
    } else if (resultado >= 17 && resultado < 18.5) {
        $trs[1].classList.add("active");
    } else if (resultado >= 18.5 && resultado < 25) {
        $trs[2].classList.add("active");
    } else if (resultado >= 25 && resultado < 30) {
        $trs[3].classList.add("active");
    } else if (resultado >= 30 && resultado < 35) {
        $trs[4].classList.add("active");
    } else if (resultado >= 35 && resultado < 40) {
        $trs[5].classList.add("active");
    } else if (resultado >= 40) {
        $trs[6].classList.add("active");
    }
}
