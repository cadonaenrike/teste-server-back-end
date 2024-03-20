import { PrismaClient, Produto as PrismaProduto } from "@prisma/client";

export class ProdutoService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createProduto(
    descricao: string,
    preco: number
  ): Promise<PrismaProduto> {
    if (
      !descricao ||
      typeof descricao !== "string" ||
      descricao.trim() === ""
    ) {
      throw new Error(
        "A descrição do produto é obrigatória e deve ser uma string não vazia"
      );
    }

    if (!preco || typeof preco !== "number" || preco <= 0) {
      throw new Error(
        "O preço do produto é obrigatório e deve ser um número positivo"
      );
    }

    const produto = await this.prisma.produto.create({
      data: { descricao, preco },
    });

    return produto;
  }

  public async getAllProdutos(): Promise<PrismaProduto[]> {
    return this.prisma.produto.findMany();
  }

  public async getProdutoByCodigo(
    codigo: number
  ): Promise<PrismaProduto | null> {
    return this.prisma.produto.findUnique({
      where: { codigo },
    });
  }

  public async updateProduto(
    codigo: number,
    descricao: string,
    preco: number
  ): Promise<PrismaProduto> {
    const produtoExistente = await this.prisma.produto.findUnique({
      where: { codigo },
    });

    if (!produtoExistente) {
      throw new Error("Produto não encontrado");
    }

    const produtoAtualizado = await this.prisma.produto.update({
      where: { codigo },
      data: { descricao, preco },
    });

    return produtoAtualizado;
  }

  public async deleteProduto(codigo: number): Promise<PrismaProduto | string> {
    const produtoExistente = await this.prisma.produto.findUnique({
      where: { codigo },
    });

    if (!produtoExistente) {
      throw new Error("Produto não encontrado");
    }

    const produtoDeletado = await this.prisma.produto.delete({
      where: { codigo },
    });

    return produtoDeletado;
  }
}
