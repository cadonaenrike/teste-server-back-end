export class Produto {
  private _codigo: number;
  private _descricao: string;
  private _preco: number;
  private _data_cadastro: Date;

  constructor(descricao: string, preco: number) {
    this._codigo = 0;
    this._descricao = descricao;
    this._preco = preco;
    this._data_cadastro = new Date();
  }

  public get codigo(): number {
    return this._codigo;
  }

  public get descricao(): string {
    return this._descricao;
  }

  public get preco(): number {
    return this._preco;
  }

  public get data_cadastro(): Date {
    return this._data_cadastro;
  }

  public set codigo(value: number) {
    this._codigo = value;
  }

  public toJson() {
    return {
      codigo: this._codigo,
      descricao: this._descricao,
      preco: this._preco,
      data_cadastro: this._data_cadastro,
    };
  }
}
