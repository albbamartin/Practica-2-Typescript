export class Direccion{
    private Calle: string;
    private Numero: number;
    private Piso: number;
    private Letra: string;
    private Codigo_postal: string;
    private Poblacion: string;
    private Provincia: string;

    constructor(
        C_Calle: string,
        C_Numero: number,
        C_Piso: number,
        C_Letra: string,
        C_Codigo_postal: string,
        C_Poblacion: string,
        C_Provincia: string,) {

      this.Calle = C_Calle;
      this.Numero = C_Numero;
      this.Piso = C_Piso;
      this.Letra = C_Letra;
      this.Codigo_postal = C_Codigo_postal;
      this.Poblacion = C_Poblacion;
      this.Provincia = C_Provincia;
    }
  
    public get C_Calle(): string {
      return this.Calle;
    }
    public set C_Calle(value: string) {
      this.Calle = value;
    }

    public get C_Numero(): number {
      return this.Numero;
    }
    public set C_Numero(value: number) {
      this.Numero = value;
    }

    public get C_Piso(): number {
      return this.Piso;
    }
    public set C_Piso(value: number) {
      this.Piso = value;
    }

    public get C_Letra(): string {
      return this.Letra;
    }
    public set C_Letra(value: string) {
      this.Letra = value;
    }

    public get C_Codigo_postal(): string {
      return this.Codigo_postal;
    }
    public set C_Codigo_postal(value: string) {
      this.Codigo_postal = value;
    }

    public get C_Poblacion(): string {
      return this.Poblacion;
    }
    public set C_Poblacion(value: string) {
      this.Poblacion = value;
    }

    public get C_Provincia(): string {
      return this.Provincia;
    }
    public set C_Provincia(value: string) {
      this.Provincia = value;
    }
  }
