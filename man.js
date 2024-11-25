// Lista de produtos
const produtos = [
    { id: 1, nome: "Pelúcia Barney", preco: 49.99 },
    { id: 2, nome: "Livro do Barney", preco: 29.99 },
    { id: 3, nome: "Camisa do Barney", preco: 19.99 },
];

// Carrinho de compras
let carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(idProduto) {
    const produto = produtos.find(p => p.id === idProduto);
    if (produto) {
        carrinho.push(produto);
        atualizarCarrinho();
    }
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('itensCarrinho');
    listaCarrinho.innerHTML = ""; // Limpa a lista antes de atualizar

    carrinho.forEach(produto => {
        const item = document.createElement('li');
        item.textContent = ${produto.nome} - R$ ${produto.preco.toFixed(2)};
        listaCarrinho.appendChild(item);
    });
}

// Função para finalizar a compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let total = 0;
    carrinho.forEach(produto => {
        total += produto.preco;
    });

    alert(Total da compra: R$ ${total.toFixed(2)}\nCompra finalizada!);
    carrinho = []; // Limpa o carrinho após a compra
    atualizarCarrinho();
}