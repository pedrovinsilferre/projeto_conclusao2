//referente ao direcionamento as páginas de favoritos, carrinho e login
function go_favorite() {
  window.location.href = "favoritos.html";
}
function go_shop() {
  window.location.href = "carrinho.html";
}

// function verificar_login (){}



function buscarFavoritos() {
  let favoritos = JSON.parse(localStorage.getItem(`favoritos_${1}`));

  if (!favoritos) {
      favoritos = {
          usuario: 1,
          produtos: [
          ]
      }
  }

  return favoritos;
}

function addFavoritos(id) {
  let favoritos = buscarFavoritos();

  const produto = produtos.find((produto) => {
      return produto.id === id;
  });

  favoritos.produtos.push(produto);

  localStorage.setItem(`favoritos_${1}`, JSON.stringify(favoritos));
}

addFavoritos(1);









































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

