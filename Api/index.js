const express = require("express");
const tarefasRoutes = require("./src/routes/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/tarefas", tarefasRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta:${port} 🚀`);
});
