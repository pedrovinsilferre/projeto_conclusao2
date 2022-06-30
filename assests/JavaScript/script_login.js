var todos_usuarios = JSON.parse(localStorage.getItem("todos_usuarios"));

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
    const usuarioLogado = localStorage.getItem("todos_usuarios");
    if (usuarioLogado) {
      window.location.href = "carrinho.html";
      garagem();
    } else {
      window.location.href = "login.html";
    }
}
document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        verificarLogin();
    }
})

function remover_login(){
  window.location.href = "login.html"
}

