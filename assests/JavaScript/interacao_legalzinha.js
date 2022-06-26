let lista_compras = [];

 function add_fav(){
    let modelo = document.querySelector("carrinho");
    let lista = document.getElementById("listaFavoritos")
    lista.innerHtml = "";

for(let i of lista_compras) {
    let item = modelo.content.cloneNode(true);
    let li = item.querySelector("li");

    let botao = li.querySelector(".lixeira");
    botao.onclick = function(){
        excluir(i);
    }
    }
    li.append(i);
    lista.append(li);
 }

 function listar_fav(){
    let btn_fav = document.querySelector(".favorito");
    if (btn_fav){

    }
 }


function remover(str) {
    for (let i = 0; i < lista_compras.length; i++){
        if(lista_compras[i] === str){
            lista_compras.splice(i, 1);
        }
    }
    add_fav()
 }
