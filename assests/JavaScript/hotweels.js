// var carritus = [];

// function add_carrinho() {
//   if (localStorage.meu_carrinho) {
//     carritus = JSON.parse(localStorage.getItem("meu_carrinho"));
//   }
//   let novo_item = document.querySelector(".btnAddCarrinho").value;
//   carritus.push(novo_item);
//   document.querySelector("btnAddCarrinho").value = "";
//   localStorage.meu_carrinho = JSON.stringify(carritus);
// }

// function mostrar_carrinho(){
//     let show_car = document.querySelector('.mostrar_carrinho');
//     show_car.innerHTML = ""
//     if (localStorage.meu_carrinho){
//         carritus = JSON.parse(localStorage.getItem("meu_carrinho"));
//     }

//     for (let i in carritus){
//         let vaga = document.cloneNode('vaga');
//         vaga.innerHTML = carritus[i];
//         show_car.append(vaga);
//     }
// }
