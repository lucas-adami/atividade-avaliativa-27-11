const { v4: uuidv4 } = require("uuid");

let tarefas = [];

// [GET] Retorna todas as tarefas
const getTodasAsTarefas = (req, res) => {
  res.json(tarefas);
};

// [GET] Retorna uma tarefa pelo ID
const getTarefaById = (req, res) => {
  const { id } = req.params;
  const tarefa = tarefas.find((t) => t.id === id);

  if (!tarefa) {
    return res.status(404).json({ message: "Tarefa não encontrada" });
  }

  res.json(tarefa);
};

// [POST] Cria uma nova tarefa
const createTarefa = (req, res) => {
  const { titulo, descricao } = req.body;

  if (!titulo || !descricao) {
    return res
      .status(400)
      .json({ message: "São necessarios titulo e descrição" });
  }

  const newTarefa = {
    id: uuidv4(),
    titulo,
    descricao,
    completed: false,
  };

  tarefas.push(newTarefa);
  res.status(201).json(newTarefa);
};

// [PUT] Atualiza uma tarefa pelo ID
const atualizaTarefa = (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, completed } = req.body;

  const tarefaIndex = tarefas.findIndex((t) => t.id === id);

  if (tarefaIndex === -1) {
    return res.status(404).json({ message: "Tarefa não encontrada" });
  }

  tarefas[tarefaIndex] = {
    ...tarefas[tarefaIndex],
    titulo: titulo || tarefas[tarefaIndex].titulo,
    descricao: descricao || tarefas[tarefaIndex].descricao,
    completed:
      completed !== undefined ? completed : tarefas[tarefaIndex].completed,
  };

  res.json(tarefas[tarefaIndex]);
};

// [DELETE] Remove uma tarefa pelo ID
const deleteTarefa = (req, res) => {
  const { id } = req.params;

  const tarefaIndex = tarefas.findIndex((t) => t.id === id);

  if (tarefaIndex === -1) {
    return res.status(404).json({ message: "Tarefa não encontrada" });
  }

  tarefas.splice(tarefaIndex, 1);
  res.status(204).send();
};

module.exports = {
  getTodasAsTarefas,
  getTarefaById,
  createTarefa,
  atualizaTarefa,
  deleteTarefa,
};
