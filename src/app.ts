import express from "express";
import todoRoutes from "./routes/users";
import connection from "./db/config";
import { json, urlencoded } from "body-parser";

const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.use("/users", todoRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

connection
  .sync()
  .then(() => {
    console.log("Banco de dados conectado com sucesso");
  })
  .catch((err) => {
    console.log("Erro", err);
  });
app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});