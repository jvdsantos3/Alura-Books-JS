let btnOrdenaPorPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdenaPorPreco.addEventListener('click', ordenaLivrosPorPreco)

function ordenaLivrosPorPreco() {
    livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirIsLivrosNaTela(livrosOrdenados)
}