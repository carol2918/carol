// Simulação de banco de dados
let estudantes = [
  { id: 1, nome: 'Carlos', curso: 'Engenharia' },
  { id: 2, nome: 'Ana', curso: 'Medicina' }
];

// GET: Retorna todos os estudantes
exports.getEstudantes = (req, res) => {
  res.json(estudantes);
};

// POST: Cria um novo estudante
exports.criarEstudante = (req, res) => {
  const { nome, curso } = req.body;
  const novoEstudante = { id: estudantes.length + 1, nome, curso };
  estudantes.push(novoEstudante);
  res.status(201).json(novoEstudante);
};

// PUT: Atualiza um estudante existente
exports.atualizarEstudante = (req, res) => {
  const { id } = req.params;
  const { nome, curso } = req.body;
  let estudante = estudantes.find(e => e.id === parseInt(id));

  if (estudante) {
    estudante.nome = nome || estudante.nome;
    estudante.curso = curso || estudante.curso;
    res.json(estudante);
  } else {
    res.status(404).send('Estudante não encontrado');
  }
};

// DELETE: Deleta um estudante
exports.deletarEstudante = (req, res) => {
  const { id } = req.params;
  const index = estudantes.findIndex(e => e.id === parseInt(id));

  if (index !== -1) {
    estudantes.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Estudante não encontrado');
  }
};
