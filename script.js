const notasCard = document.querySelectorAll(".buttons-list span");
const botaoSubmit = document.querySelector("button")
const containerThanks = document.querySelector(".container-thanks")
const containerNotas = document.querySelector(".container-rating")


function handleClick(e) {
    notasCard.forEach(card => {
        card.classList.remove("ativo")
    });
    e.target.classList.add("ativo");

    const notaAtiva = document.querySelector(".buttons-list span.ativo")
    const notaFinal = document.querySelector(".p-background p span")
    notaFinal.innerText = notaAtiva.innerText;
}

function handleSubmit() {
    containerNotas.style.display = "none"
    containerThanks.style.display = "block"
}

notasCard.forEach(card => {
    card.addEventListener("click", handleClick)
})

botaoSubmit.addEventListener("click", handleSubmit)

