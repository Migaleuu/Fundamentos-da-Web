function inverteString(){
    let texto = document.getElementById("stringparainverter").value;
    let textoInvertido=texto.split('').reverse().join('');
    let paragrafo = document.getElementById("respostainversao");
    paragrafo.innerHTML = textoInvertido;
}

function marcaVogal(){
    let texto = document.getElementById("fraseVogais").value
    let resultado = document.getElementById("respostaNegrito")

    resposta = texto.replaceAll('a', "<b>a</b>")
    resposta = resposta.replaceAll('e', "<b>e</b>")
    resposta = resposta.replaceAll('i', "<b>i</b>")
    resposta = resposta.replaceAll('o', "<b>o</b>")
    resposta = resposta.replaceAll('u', "<b>u</b>")
    resposta = resposta.replaceAll('A', "<b>A</b>")
    resposta = resposta.replaceAll('E', "<b>E</b>")
    resposta = resposta.replaceAll('I', "<b>I</b>")
    resposta = resposta.replaceAll('O', "<b>O</b>")
    resposta = resposta.replaceAll('U', "<b>U</b>")

            
    console.log(resposta)
    resultado.innerHTML = resposta
}


function contagemString(){
    let frase = document.getElementById("fraseparacontagem").value;
    let frasestring = frase.split(' ');
    function strincounter(frasestring, keepCase) {
        var obj = {};
        for (var i = 0; i < frasestring.length; i++) {
            if (!obj[frasestring[i]]) obj[frasestring[i]] = 0;
            obj[frasestring[i]]++;
        }
        return obj;
    }
    let respostacontagem = strincounter(frasestring);    
    console.log(respostacontagem);
    let respostacontagemtexto = document.getElementById("respostacontagem");
    respostacontagemtexto.innerHTML = Object.entries(respostacontagem);
}

function maiorOcorrencia(){
    let text = document.getElementById("fraseOcorrencia").value
    let textFormated = text.split(' ')

    

    var data = []


    textFormated.map(function(item){
        let encontrou = false
    

        for(let i=0;i<data.length;i++){
            if(data[i]?.palavra == item){
                data[i].cont+=1
                encontrou = true
            }
        }

        if(encontrou=true){
            let intt = {
                palavra: item,
                cont: 1
            }
            data.push(intt)
        }
        
    })
    

    console.log(data)

    let resultado = documet.getElementById("respostaOcorrencia")

    resultado.innerHTML = data
}


function Substistring(){
    let fraseprocura =document.getElementById("fraseparaprocurar").value;
    let frasesubstituir = document.getElementById("fraseparasubstituir").value;
    let fraseparaprosub = document.getElementById("fraseparaprosub").value;
    let substituto = fraseparaprosub.replaceAll(fraseprocura,frasesubstituir);
    let respostaprocsubtexto = document.getElementById("respostaprocsub");
    respostaprocsubtexto.innerHTML = substituto;
}

function Datecalc(){
    let datanascimento1 =document.getElementById("datebase").value;
    let datanascimento2 =new Date(datanascimento1);
    let horaagora = new Date();
    const diff = Math.abs(horaagora.getTime() - datanascimento2.getTime());
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    console.log(days);
    let respostadatetexto = document.getElementById("respostadate");
    respostadatetexto.innerHTML = days;
}

function dataExtenso(){
    let data = document.getElementById("textoData").value
    let dateInt = data.split("/")
    let diaInformado = dateInt[0] 
    let mesInformado = dateInt[1]
    let anoInformado = dateInt[2]

    meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro")

    let resposta = diaInformado + ' de ' + meses[mesInformado - 1] + ' de ' + anoInformado
    let resultado = document.getElementById("respostaDataPorExtenso")
    resultado.innerHTML = resposta

}


function dataSemana(){
    let primeiraData = document.getElementById("data1").value
    let segundaData = document.getElementById("date2").value

    let dateInt1 = primeiraData.split("/")
    let dateInt2 = segundaData.split("/")

    let diaInformado1 = dateInt1[0]
    let mesInformado1 = dateInt1[1]
    let anoInformado1 = dateInt1[2]

    let diaInformado2 = dateInt2[0]
    let mesInformado2 = dateInt2[1]
    let anoInformado2 = dateInt2[2]

    let dia = diaInformado2 - diaInformado1
    let mes = mesInformado2 - mesInformado1
    let ano = anoInformado2 - anoInformado1

    let soma = ((ano*365) + (mes*30) + (dia))/7

    let resultado = document.getElementById("respostaSemanas")
    console.log(parseInt(soma) + ' semanas')
    resultado.innerHTML = parseInt(soma) + ' semanas'
}

function senha(){
    let senhaFor = document.getElementById("senha").value

    var letrasMaiusculas = /[A-Z]/;
    var letrasMinusculas = /[a-z]/; 
    var numeros = /[0-9]/;
    var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

    
    for(let i=0;i<senhaFor.length;i++){
        if((letrasMaiusculas.test(senhaFor))&&(letrasMinusculas.test(senhaFor))&&
        (numeros.test(senhaFor))&&(caracteresEspeciais.test(senhaFor))){
            document.getElementById('color').style.backgroundColor = 'green'
            console.log('verde')
        }
        else if((letrasMaiusculas.test(senhaFor))&&(letrasMinusculas.test(senhaFor))&&(numeros.test(senhaFor))||
        (letrasMaiusculas.test(senhaFor))&&(letrasMinusculas.test(senhaFor))&&(caracteresEspeciais.test(senhaFor))){
            document.getElementById('color').style.backgroundColor = 'orange'
            console.log('laranja')
        }
        else if((letrasMaiusculas.test(senhaFor))&&(letrasMinusculas.test(senhaFor))||(letrasMaiusculas.test(senhaFor))
        ||(letrasMinusculas.test(senhaFor))||(numeros.test(senhaFor))||(caracteresEspeciais.test(senhaFor))){
            document.getElementById('color').style.backgroundColor = 'red'
            console.log('vermelho')
        }
    }
}


function codificando(){
    let frase = document.getElementById("fraseParaCodificar").value
    let resultado = document.getElementById("respostaCodificada")

    let fraseNova = frase.replaceAll('t','p').replaceAll('T','P').replaceAll('p','t').replaceAll('P','T').replaceAll('e','o').replaceAll('E','O').replaceAll('o','e').replaceAll('O','E').replaceAll('n','l').replaceAll('N','L').replaceAll('l','n').replaceAll('L','N').replaceAll('i','a').replaceAll('I','A').replaceAll('a','i').replaceAll('A','i').replaceAll('s','r').replaceAll('S','R').replaceAll('r','s').replaceAll('R','S')

    resultado.innerHTML = fraseNova

}


window.onload = function (){
    let btTestarinversao = document.getElementById("testarinversao");
    btTestarinversao.addEventListener("click",inverteString);

    let btVogaisNegrito = document.getElementById("testarNegrito")
    btVogaisNegrito.addEventListener("click",marcaVogal)

    let btContagemString = document.getElementById("testarcontagem");
    btContagemString.addEventListener("click",contagemString);

    let btOcorrencia = document.getElementById("buttonOcorrencia")
    btOcorrencia.addEventListener("click",maiorOcorrencia)

    let btExecutaSub = document.getElementById("executasub");
    btExecutaSub.addEventListener("click",Substistring);

    let btDatecalc = document.getElementById("executadatebase");
    btDatecalc.addEventListener("click",Datecalc);

    let btdataExtenso = document.getElementById("dataPorExtenso");
    btdataExtenso.addEventListener("click", dataExtenso);

    let btSemana = document.getElementById("buttonSemanas")
    btSemana.addEventListener("click",dataSemana)

    let btSenha = document.getElementById("buttonSenha")
    btSenha.addEventListener("click",senha)

    let btCodifica = document.getElementById("buttonCodifica")
    btCodifica.addEventListener("click",codificando)
}



