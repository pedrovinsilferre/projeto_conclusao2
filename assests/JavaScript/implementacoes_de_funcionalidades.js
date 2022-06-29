lista_shop = [];
lista_fav = [];

//referente ao direcionamento as páginas de favoritos, carrinho e login
function go_favorite() {
  window.location.href = "favoritos.html";
}
function go_shop() {
  window.location.href = "carrinho.html";
}
function logar() {
  window.location.href = "login.html";
}

//add a aba de favoritos
function add_fav(){
    let btn = document.querySelector('#fav_product');
    let template = document.querySelector('#modelo_favoritos');
    let ul = document.querySelector('#listaFavoritos');

     btn.onclick = function(){
      lista_fav.push(template.value);

     }
}
console.log(lista_fav)
//add a aba de carrinho

//função de excluir
