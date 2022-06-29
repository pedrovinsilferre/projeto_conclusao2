async function login(){
    debugger;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value

    const body = {
        email: email,
        senha: senha
    }

    const resposta = await fetch("https://codifica-demo-api.herokuapp.com/api/v1/users/login", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const json = await resposta.json();
    alert(json.mensagem)

    if (resposta.ok) {
        window.location.href = "carrinho.html";
    }
}


