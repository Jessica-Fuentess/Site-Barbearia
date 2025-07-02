let botoesCarrossel = document.querySelectorAll(".botao");
let imagens = document.querySelectorAll(".imagem");
let setaEsquerda = document.querySelector(".seta-esquerda");
let setaDireita = document.querySelector(".seta-direita");
let indiceAtual = 0;

function mostrarImagem(indice) {
    document.querySelector(".imagem.ativa").classList.remove("ativa");
    document.querySelector(".botao.selecionado").classList.remove("selecionado");

    imagens[indice].classList.add("ativa");
    botoesCarrossel[indice].classList.add("selecionado");
}

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        indiceAtual = indice;
        mostrarImagem(indiceAtual);
    });
});

setaDireita.addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    mostrarImagem(indiceAtual);
});

setaEsquerda.addEventListener("click", () => {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    mostrarImagem(indiceAtual);
});

let botoesCarrossel2 = document.querySelectorAll(".botao2");
let imagens2 = document.querySelectorAll(".imagem2");
let setaEsquerda2 = document.querySelector(".seta-esquerda2");
let setaDireita2 = document.querySelector(".seta-direita2");
let indiceAtual2 = 0;

function mostrarImagem2(indice) {
    document.querySelector(".imagem2.ativa2").classList.remove("ativa2");
    document.querySelector(".botao2.selecionado2").classList.remove("selecionado2");

    imagens2[indice].classList.add("ativa2");
    botoesCarrossel2[indice].classList.add("selecionado2");
}

botoesCarrossel2.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        indiceAtual2 = indice;
        mostrarImagem2(indiceAtual2);
    });
});

setaDireita2.addEventListener("click", () => {
    indiceAtual2 = (indiceAtual2 + 1) % imagens2.length;
    mostrarImagem2(indiceAtual2);
});

setaEsquerda2.addEventListener("click", () => {
    indiceAtual2 = (indiceAtual2 - 1 + imagens2.length) % imagens2.length;
    mostrarImagem2(indiceAtual2);
});

let menuBtn = document.getElementById('menu-btn');
let menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

let menuLinks = document.querySelectorAll('#menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
    menu.classList.remove('ativo');
    });
});