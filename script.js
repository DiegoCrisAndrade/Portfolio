document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

/* Tratamento de eventos */
document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} Semana(s)`
    atualizarPreco()
})

function atualizarPreco() {
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

    let preco = qtde * 100;

    let taxaUrgencia = 1 - prazo * 0.1;

    /*
    preco = preco + (preco * taxaUrgencia) */

    preco *= 1 + taxaUrgencia

    /*
    if (temJS) {
        preco = preco + (preco * 10 / 100)
    } */

    if (temJS) preco *= 1.1

    /*
    if (incluiLayout) {
        preco = preco + 500
    } */

    if (incluiLayout) preco += 500

    //manipulação do dom
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}
