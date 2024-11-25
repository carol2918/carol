// Simulação de banco de dados
let professores = [
  { id: 1, nome: 'João', disciplina: 'Matemática' },
  { id: 2, nome: 'Maria', disciplina: 'História' }
];

// GET: Retorna todos os professores
exports.getProfessores = (req, res) => {
  res.json(professores);
};

// POST: Cria um novo professor
exports.criarProfessor = (req, res) => {
  const { nome, disciplina } = req.body;
  const novoProfessor = { id: professores.length + 1, nome, disciplina };
  professores.push(novoProfessor);
  res.status(201).json(novoProfessor);
};

// PUT: Atualiza um professor existente
exports.atualizarProfessor = (req, res) => {
  const { id } = req.params;
  const { nome, disciplina } = req.body;
  let professor = professores.find(p => p.id === parseInt(id));

  if (professor) {
    professor.nome = nome || professor.nome;
    professor.disciplina = disciplina || professor.disciplina;
    res.json(professor);
  } else {
    res.status(404).send('Professor não encontrado');
  }
};

// DELETE: Deleta um professor
exports.deletarProfessor = (req, res) => {
  const { id } = req.params;
  const index = professores.findIndex(p => p.id === parseInt(id));

  if (index !== -1) {
    professores.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Professor não encontrado');
  }
};
