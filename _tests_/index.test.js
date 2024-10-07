const { criarProduto, atualizarEstoque, tempoParaFicarSemEstoque, produtoMaisProximoDeFicarSemEstoque, simularVendas } = require('../src/index');

describe('Sistema de Previsão de Estoque', () => {
  test('Deve criar um produto corretamente', () => {
    const produto = criarProduto('Produto A', 100, 50, 5);
    expect(produto.nome).toBe('Produto A');
    expect(produto.preco).toBe(100);
    expect(produto.quantidade).toBe(50);
    expect(produto.taxaVenda).toBe(5);
  });

  test('Deve atualizar o estoque corretamente', () => {
    const produto = criarProduto('Produto B', 200, 30, 3);
    atualizarEstoque(produto, 20);
    expect(produto.quantidade).toBe(50);
  });

  test('Deve calcular o tempo para ficar sem estoque corretamente', () => {
    const produto = criarProduto('Produto C', 150, 45, 5);
    expect(tempoParaFicarSemEstoque(produto)).toBe(9);
  });

  test('Deve identificar o produto mais próximo de ficar sem estoque', () => {
    const loja = [
      criarProduto('Produto D', 50, 20, 2),
      criarProduto('Produto E', 75, 10, 1)
    ];
    expect(produtoMaisProximoDeFicarSemEstoque(loja).nome).toBe('Produto E');
  });

  test('Deve simular vendas corretamente', () => {
    const loja = [
      criarProduto('Produto F', 100, 60, 2)
    ];
    simularVendas(loja);
    expect(loja[0].quantidade).toBe(0);
  });
});
