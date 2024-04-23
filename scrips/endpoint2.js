const express = require('express');
const app = express();
const PORT = process.env.PORT || 8001;

// Middleware para permitir o uso de JSON nas requisições
app.use(express.json());

// Array para armazenar os livros (simulando um banco de dados)
let livros = [];

// Rota para obter todos os livros
app.get('/livros', (req, res) => {
  res.json(livros);
});

// Rota para adicionar um novo livro
app.post('/livros', (req, res) => {
  const novoLivro = req.body;
  livros.push(novoLivro);
  res.status(201).send('Livro adicionado com sucesso!');
});

// Rota para atualizar um livro existente
app.put('/livros/:id', (req, res) => {
  const { id } = req.params;
  const livroAtualizado = req.body;

  // Atualize o livro com o ID correspondente

  res.send('Livro atualizado com sucesso!');
});

// Rota para excluir um livro
app.delete('/livros/:id', (req, res) => {
  const { id } = req.params;

  // Exclua o livro com o ID correspondente

  res.send('Livro excluído com sucesso!');
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
