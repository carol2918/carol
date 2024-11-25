const express = require('express');
const app = express();
const port = 5000;

// Importar as rotas dos professores e estudantes
const professoresRoutes = require('./routes/professoresRoutes');
const estudantesRoutes = require('./routes/estudantesRoutes');

// Middleware para tratar o corpo da requisição
app.use(express.json());

// Definindo as rotas
app.use('/professores', professoresRoutes);
app.use('/estudantes', estudantesRoutes);

// Rota raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo à API da Escola!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
