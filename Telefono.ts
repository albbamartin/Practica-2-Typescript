export class Telefono {
  private Tipo: string;
  private Numero: number;

    constructor(
        C_Tipo: string,
        C_Numero: number,) {

      this.Tipo = C_Tipo;
      this.Numero = C_Numero;
    }
    
    public get C_Tipo(): string {
      return this.Tipo;
    }

    public set C_Tipo(value: string){
      this.Tipo = value;
    }

    public get C_Numero(): number {
      return this.Numero;
    }

    public set C_Numero(value: number){
      this.Numero = value
    }
  }
