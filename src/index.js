// src/index.js

// Função para criar um produto
function criarProduto(nome, preco, quantidade, taxaVenda) {
  return { nome, preco, quantidade, taxaVenda };
}

// Função para atualizar o estoque
function atualizarEstoque(produto, quantidade) {
  produto.quantidade += quantidade;
}

// Função para calcular quanto tempo resta até o produto ficar sem estoque
function tempoParaFicarSemEstoque(produto) {
  if (produto.taxaVenda === 0) return Infinity; // Nunca ficará sem estoque se não há vendas
  return Math.floor(produto.quantidade / produto.taxaVenda);
}

// Função para verificar qual produto está mais próximo de ficar sem estoque
function produtoMaisProximoDeFicarSemEstoque(loja) {
  let produtoMaisProximo = null;

  for (const produto of loja) {
      if (!produtoMaisProximo || 
          produto.quantidade < produtoMaisProximo.quantidade) {
          produtoMaisProximo = produto;
      }
  }

  return produtoMaisProximo; // Retorne o produto mais próximo de acabar
}


// Função para simular vendas por 30 dias
function simularVendas(loja) {
  loja.forEach(produto => {
    for (let i = 0; i < 30; i++) {
      produto.quantidade -= produto.taxaVenda;
    }
  });
}

module.exports = {
  criarProduto,
  atualizarEstoque,
  tempoParaFicarSemEstoque,
  produtoMaisProximoDeFicarSemEstoque,
  simularVendas
};

