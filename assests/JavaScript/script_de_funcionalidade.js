//para onde vai todos os elementos listados em favoritos
lista_compras = [];

//listar o elemento em favoritos
// function add_fav() {
//   let modelo = document.querySelector("#btn_shop");
//   let lista = document.getElementById("");
//   lista.innerHtml = "";

//   for (let i of lista_compras) {
//     let item = modelo.content.cloneNode(true);
//     let li = item.querySelector("li");

//     let botao = li.querySelector(".lixeira");
//     botao.onclick = function () {
//       excluir(i);
//     };
//   }
//   li.append(i);
//   lista.append(li);
// }



//fazer o elemento listado aparecer 
function listar_fav() {
  let btn_fav = document.querySelector("#btn_fav");
  if (btn_fav.value === listar()) {
    lista_compras.push(btn_fav.value);
    add_fav();
  }
}

//remover o elemento listado do favoritos
function remover(str) {
  for (let i = 0; i < lista_compras.length; i++) {
    if (lista_compras[i] === str) {
      lista_compras.splice(i, 1);
    }
  }
  add_fav();
}
