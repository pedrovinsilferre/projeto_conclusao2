//referente ao direcionamento as páginas de favoritos, carrinho e login
function go_favorite() {
  window.location.href = "favoritos.html";
}
function go_shop() {
  window.location.href = "carrinho.html";
}










































mostrar_carrinho = () => {
  document.localStorege.setItem(arquivo_produtos.codeID);
};

let links = document.querySelector(".btn");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let key = this.getAttribute("key");
    arquivo_produtos[key].quantidade++;
    mostrar_carrinho();
  });
}
  function addFavoritos(codeID){

  }

