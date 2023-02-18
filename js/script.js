// ---------> Configuração água

const preco1= 52.447; // 0 a 10
const preco2 = 31.467;  // 10 a 30
const recursosH = 1;    //recursos hídricos 
const imposEsgo= 0;    // imposto sob esgoto


// ---------> Configuração luz

const precoUniL = 1.041290; // Preço unitário
const impIlum   = 26.38;  // imposto de iluminação pública

//-----------> Area de cálculo

const leituraAnterior = document.getElementById('leitura-anterior');
const valorRelogio = document.getElementById('valor-relogio');
const resultadoE = document.querySelector('.valor-aproximado')
const btn1 = document.getElementById('btn1');



function enableButton (){
    if (leituraAnterior.value !== "" && valorRelogio.value !== ""){
    btn1.disabled = false;
} else {
btn1.disabled = true;
}
}


leituraAnterior.addEventListener("input",enableButton);
valorRelogio.addEventListener("input",enableButton);



const showinsertData = async (valorLR, precoUniL, impIlum, resultadoE) => {
    let multi = valorLR*precoUniL
    let soma = multi+impIlum
    resultadoE.innerText= `R$ ${Math.ceil(soma * 100) / 100}`;

}

btn1.addEventListener("click", (e)=> {

    e.preventDefault();

    const valueEL = parseInt(leituraAnterior.value.trim().split(" ").join(""));
    const valueER = parseInt(valorRelogio.value.trim().split(" ").join(""));
    const valorLR = valueER-valueEL

    showinsertData(valorLR, precoUniL, impIlum, resultadoE)

})

//---------------------------------------------------------------------------------//

const leituraAnteriorA = document.getElementById("leitura-anterior-agua")
const valorHidro = document.getElementById("valor-hidro")
const btn2  =document.getElementById("btn2")
const resultadoA=document.querySelector(".valor-aproximadoA")


function enableButton2 (){
    if (leituraAnteriorA.value !== "" && valorHidro.value !== ""){
    btn2.disabled = false;
} else {
btn2.disabled = true;
}
}

leituraAnteriorA.addEventListener("input",enableButton2);
valorHidro.addEventListener("input",enableButton2);



const showinsertData2 = async (valorLR, preco1, preco2,recursosH,imposEsgo) => {
    if (valorLR <=10 ){
    soma = preco1+recursosH+imposEsgo;
    resultadoA.innerText= `R$ ${Math.ceil(soma * 100) / 100}`;
    }  else if (valorLR > 10 && valorLR < 30){
    soma = preco1+preco2+recursosH+imposEsgo
    resultadoA.innerText= `R$ ${Math.ceil(soma * 100) / 100}`;
    } else { (valorLR > 30)
        soma = preco1+preco2+recursosH+imposEsgo
        resultadoA.innerText= `Pode procurar aí que tá vazando água !!`;
 
}}

btn2.addEventListener("click", (e)=> {

    e.preventDefault();

    const valueEL = parseInt(leituraAnteriorA.value.trim().split(" ").join(""));
    const valueER = parseInt(valorHidro.value.trim().split(" ").join(""));
    const valorLR = valueER-valueEL

    showinsertData2(valorLR, preco1, preco2,recursosH,imposEsgo)

})
