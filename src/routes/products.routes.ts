import { Router } from "express";
import { ProdutoController } from "../controllers/product.controller";

const router = Router();
const produtoController = new ProdutoController();

router.get(
  "/produtos",
  produtoController.getAllProdutos.bind(produtoController)
);

router.get(
  "/produtos/:codigo",
  produtoController.getProdutoByCodigo.bind(produtoController)
);

router.post(
  "/produtos",
  produtoController.createProduto.bind(produtoController)
);

router.put(
  "/produtos/:codigo",
  produtoController.updateProduto.bind(produtoController)
);

router.delete(
  "/produtos/:codigo",
  produtoController.deleteProduto.bind(produtoController)
);

export default router;
