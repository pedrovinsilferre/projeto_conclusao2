let todos_usuarios = JSON.parse(localStorage.getItem("todos_usuarios"));

if (todos_usuarios == null) {
  todos_usuarios = [];
}

async function login() {
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");

  const resposta = await fetch(
    "https://codifica-demo-api.herokuapp.com/api/v1/users/login",
    {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
        senha: senha.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (resposta.ok) {
    localStorage.setItem("login_logado", email.value);

    let logado = false;
    for (let i = 0; i < todos_usuarios.length; i++) {
      if (todos_usuarios[i].login_email == email.value) {
        logado = true;
        break;
      }
    }

    if (!logado) {
      todos_usuarios.push({
        login_email: email.value,
        carrinho: [],
        favoritos: [],
      });
    }

    localStorage.setItem("todos_usuarios", JSON.stringify(todos_usuarios));

    window.location.href = "produtos.html";
  } else {
    alert("Email ou senha incorretos");
    email.value = "";
    senha.value = "";
  }
}

function verificarLogin() {
  const algo = localStorage.getItem("todos_usuarios");
  if (algo) {
    window.location.href = "carrinho.html";
  } else {
    window.location.href = "login.html";
  }
}

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    verificarLogin();
  }
  vai_pra_garagem();
});

function trocar_login() {
  window.location.href = "login.html";
}

function vai_pra_garagem() {
  debugger;
let id = localStorage.getItem("login_logado");
let todos_usuarios = JSON.parse(localStorage.getItem("todos_usuarios"));
for(let i =0; todos_usuarios[i].login_email != id; i++);
}












const bugiganga = [
  {
    codeID: "vestuario01",
    nome: "Moletom Unissex Hoddie Marvel",
    preco: "79.90",
    imagem: "assests/imagens/moletom-marvel-frente.webp",
    quantidade: "0",
  },
  {
    codeID: "vestuario02",
    nome: "Blusa Moletom Unissex Batman",
    preco: "79.90",
    imagem: "assests/imagens/moletom-batman-frente.webp",
    quantidade: "0",
  },
  {
    codeID: "vestuario03",
    nome: "Camiseta Dupla Face the Boys Diabolical",
    preco: "59.90",
    imagem: "assests/imagens/camiseta-the-boys-frente.webp",
    quantidade: "0",
  },
  {
    codeID: "vestuario03",
    nome: "Camiseta Dupla Face Stranger Things",
    preco: "59.90",
    imagem: "assests/imagens/camiseta-stranger-things-frente.webp",
    quantidade: "0",
  },

  {
    codeID: "almofadas01",
    nome: "Almofada Jesus Cristo",
    preco: "59.90",
    imagem: "assests/imagens/almofada-jesus.jpg",
    quantidade: "0",
  },
  {
    codeID: "almofadas02",
    nome: "Almofada BTS",
    preco: "59.90",
    imagem: "assests/imagens/almofadas-bts.webp",
    quantidade: "0",
  },
  {
    codeID: "almofadas03",
    nome: "Almofada Waifu",
    preco: "79.90",
    imagem: "assests/imagens/almofada-waifu-rosa.jpg",
    quantidade: "0",
  },
  {
    codeID: "almofadas04",
    nome: "Almofada Kakashi",
    preco: "79.90",
    imagem: "assests/imagens/almofada-kakashi.webp",
    quantidade: "0",
  },

  {
    codeID: "caneca01",
    nome: "Caneca Super-Vó",
    preco: "79.90",
    imagem: "assests/imagens/caneca-super-vo.jpg",
    quantidade: "0",
  },
  {
    codeID: "caneca02",
    nome: "Caneca Homem de Ferro",
    preco: "79.90",
    imagem: "assests/imagens/caneca-homem de ferro.webp",
    quantidade: "0",
  },
  {
    codeID: "caneca03",
    nome: "Caneca Homem Aranha",
    preco: "59.90",
    imagem: "assests/imagens/caneca-homem-aranha.webp",
    quantidade: "0",
  },
  {
    codeID: "caneca04",
    nome: "Caneca Naruto",
    preco: "59.90",
    imagem: "assests/imagens/caneca-naruto.jpg",
    quantidade: "0",
  },

  {
    codeID: "quadros01",
    nome: "Quado Rick and Morty",
    preco: "79.90",
    imagem: "assests/imagens/quadro-ricky-and-morty.jpg",
    quantidade: "0",
  },
  {
    codeID: "quadro02",
    nome: "Quadro Star Wars",
    preco: "79.90",
    imagem: "assests/imagens/quadro-star-wars.png",
    quantidade: "0",
  },
  {
    codeID: "quadro03",
    nome: "Quadro Super Mario",
    preco: "59.90",
    imagem: "assests/imagens/quadro-super-mario.webp",
    quantidade: "0",
  },
  {
    codeID: "quadro04",
    nome: "Quadro The Flash",
    preco: "59.90",
    imagem: "assests/imagens/quadro-the-flash.png",
    quantidade: "0",
  },
  {
    codeID: "livro01",
    nome: "Livro Game of Thrones",
    preco: "79.90",
    imagem: "assests/imagens/livros-got.jpg",
    quantidade: "0",
  },
  {
    codeID: "livro02",
    nome: "Livro O Nome do Vento",
    preco: "79.90",
    imagem: "assests/imagens/livros-nome-do-vento.jpg",
    quantidade: "0",
  },
  {
    codeID: "livro03",
    nome: "Livro O Temos do Sábio",
    preco: "59.90",
    imagem: "assests/imagens/livros-temor-do-sabio.jpg",
    quantidade: "0",
  },
  {
    codeID: "livro04",
    nome: "Livro A Furia ods Reis",
    preco: "59.90",
    imagem: "assests/imagens/livro-got.jpg",
    quantidade: "0",
  },
  {
    codeID: "colecionaveis01",
    nome: "Jesus Cristo ",
    preco: "33,00",
    imagem: "assests/imagens/colecionaveis-boneco-jesus.jpg",
    quantidade: "0",
  },
  {
    codeID: "colecionaveis02",
    nome: "Baphomet",
    preco: "66,60",
    imagem: "assests/imagens/colecionaveis-baphomet.webp",
    quantidade: "0",
  },
  {
    codeID: "colecionaveis03",
    nome: "São Jorge",
    preco: "59.90",
    imagem: "assests/imagens/colecionaveis-sao-jorge.webp",
    quantidade: "0",
  },
  {
    codeID: "colecionaveis04",
    nome: "Homem de Ferro",
    preco: "79.90",
    imagem: "assests/imagens/colecionaveis-homem-de-ferro.webp",
    quantidade: "0",
  },
];
