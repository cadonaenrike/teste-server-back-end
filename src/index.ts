import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import produtoRoutes from "./routes/products.routes";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api", produtoRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("API está rodando. Use /api para acessar os produtos.");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
