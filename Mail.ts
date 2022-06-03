export class Mail {
    private Tipo: string;
    private Direccion: string;

    constructor(
        C_Tipo: string,
        C_Direccion: string) {

      this.Tipo = C_Tipo;
      this.Direccion = C_Direccion;
    }

    public get C_Tipo(): string {
      return this.Tipo;
  }

  public set C_Tipo(Tipo: string) {
      this.Tipo = Tipo;
  }

  public get C_Direccion(): string {
      return this.Direccion;
  }

  public set C_Direccion(Direccion: string) {
      this.Direccion = Direccion;
  }
    
  }

