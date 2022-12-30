var xhttp = new XMLHttpRequest();
var catalogoFilmes;




xhttp.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200){
        catalogoFilmes = xhttp.response;
        catalogoFilmes = JSON.parse(this.responseText);
        console.log(catalogoFilmes);

        const divCatalogo = document.querySelector(".filmes");
        
        
        catalogoFilmes.forEach(catalogo => {
            console.log(catalogo.titulosSemelhantes)
           
            divCatalogo.innerHTML += `
            <div class="filmes" style="
            padding:20px;
            heigth:290px;
            border-radius: 10px;
            background-color:white;
            width:550px;
            display:inline-block;
            vertical-align:top;
            margin-left:20px;
            margin-top:30px">

            
            
            <div class="classificao${catalogo.classificacao}"style="text-align:center">
                <strong style="font-size:30px">${catalogo.classificacao}</strong>
            </div>

            <div class="ranking${catalogo.opinioes[0].rating}" >
                
            
            </div>
            

            <div class="opinioes" style="text-align:center;margin-left:180px;margin-top:30px">
            <h1>${catalogo.titulo}</h1>
            </div>

            <div class="figura" style="text-align:left;margin-top:-60px;margin-left:10px">
            <img src="${catalogo.figura}" style="width:170px;height: 110px"}>
            </div>

            <div class="elenco" style="width: 250px;margin-left:240px;text-align:center;margin-top:-90px;margin-bottom:30px">
            <p><strong>Elenco: </strong>${catalogo.elenco}</p>
            </div>
            
            <div class="resumo" style="margin-top:50px">
            <p  style="width: 500px"><strong>Resumo: </strong>${catalogo.resumo}</p>
            </div>

            <div class="generos" style="width:520px;">
            <p><strong>Generos: </strong>${catalogo.generos}</p>
            </div>

            <div class="descricao" >
            <p>${catalogo.opinioes.map((element) => {
                return `<span><strong>Comentário:</strong> ${element.descricao}<br></span>`
            }).join("")}</p>
            </div>

            <div class="similares${catalogo.titulosSemelhantes[0]}"style="width:50px;height:50px;margin-top:-15px"></div>
            <div class="similares${catalogo.titulosSemelhantes[1]}"style="width:50px;height:50px;margin-left:60px;margin-top:-50px"></div>
            <div class="similares${catalogo.titulosSemelhantes[2]}"style="width:50px;height:50px;margin-left:120px;margin-top:-50px"></div>
            `

        })



        
    } else {

    }
}


xhttp.open("GET","https://rafaelescalfoni.github.io/desenv_web/filmes.json");
xhttp.send();

