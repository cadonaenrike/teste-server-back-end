import { Request, Response } from "express";
import { ProdutoService } from "../services/product.service";
import { ResponseDto } from "../dtos/response.dto";

export class ProdutoController {
  private produtoService: ProdutoService;

  constructor() {
    this.produtoService = new ProdutoService();
  }

  private sendResponse(res: Response, responseDto: ResponseDto) {
    return res.status(responseDto.code).json(responseDto);
  }

  private handleError(error: unknown): string {
    return error instanceof Error
      ? error.message
      : "Ocorreu um erro desconhecido";
  }

  public async getAllProdutos(req: Request, res: Response) {
    try {
      const produtos = await this.produtoService.getAllProdutos();
      this.sendResponse(res, {
        code: 200,
        message: "Produtos recuperados com sucesso",
        data: produtos,
      });
    } catch (error) {
      this.sendResponse(res, { code: 500, message: this.handleError(error) });
    }
  }

  public async getProdutoByCodigo(req: Request, res: Response) {
    try {
      const codigo = parseInt(req.params.codigo);
      const produto = await this.produtoService.getProdutoByCodigo(codigo);

      if (produto) {
        this.sendResponse(res, {
          code: 200,
          message: "Produto encontrado",
          data: produto,
        });
      } else {
        this.sendResponse(res, {
          code: 404,
          message: "Produto não encontrado",
        });
      }
    } catch (error) {
      this.sendResponse(res, { code: 500, message: this.handleError(error) });
    }
  }

  public async createProduto(req: Request, res: Response) {
    try {
      const { descricao, preco } = req.body;
      const produto = await this.produtoService.createProduto(descricao, preco);
      this.sendResponse(res, {
        code: 201,
        message: "Produto criado com sucesso",
        data: produto,
      });
    } catch (error: any) {
      this.sendResponse(res, { code: 400, message: error.message });
    }
  }

  public async updateProduto(req: Request, res: Response) {
    try {
      const codigo = parseInt(req.params.codigo);
      const { descricao, preco } = req.body;
      const produtoAtualizado = await this.produtoService.updateProduto(
        codigo,
        descricao,
        preco
      );
      this.sendResponse(res, {
        code: 200,
        message: "Produto atualizado com sucesso",
        data: produtoAtualizado,
      });
    } catch (error) {
      this.sendResponse(res, { code: 500, message: this.handleError(error) });
    }
  }

  public async deleteProduto(req: Request, res: Response) {
    try {
      const codigo = parseInt(req.params.codigo);
      await this.produtoService.deleteProduto(codigo);
      this.sendResponse(res, {
        code: 200,
        message: "Produto excluído com sucesso",
      });
    } catch (error) {
      if (
        error instanceof Error &&
        error.message === "Produto não encontrado"
      ) {
        this.sendResponse(res, { code: 404, message: error.message });
      } else {
        this.sendResponse(res, { code: 500, message: this.handleError(error) });
      }
    }
  }
}
