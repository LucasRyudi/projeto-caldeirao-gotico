// passo 1 - dar um jeito de pegar o elemento HTML dos botçoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

// passo 2 - dar um jeito de identificar o clique do usuario no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // passo 3 - desmarcar o botao selecionado anterior
        desativarBotaoSelecionado();

        // passo 4 - marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        // passo 5 - esconder a imagem ativa de fundo anterior
        esconderImagemAtiva();

        // passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        imagens[indice].classList.add('ativa');
    });
})

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
