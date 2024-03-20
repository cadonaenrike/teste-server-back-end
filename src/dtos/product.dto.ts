export class ProdutoDto {
  codigo: number;
  descricao: string;
  preco: number;
  data_cadastro: Date;

  constructor(
    codigo: number,
    descricao: string,
    preco: number,
    data_cadastro?: Date
  ) {
    this.codigo = codigo;
    this.descricao = descricao;
    this.preco = preco;
    this.data_cadastro = data_cadastro ?? new Date();
  }

  public toJson() {
    return {
      codigo: this.codigo,
      descricao: this.descricao,
      preco: this.preco,
      data_cadastro: this.data_cadastro,
    };
  }
}
