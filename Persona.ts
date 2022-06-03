import {Direccion} from "./Direccion";
import {Mail} from "./Mail";
import {Telefono} from "./Telefono";

export class Persona {
    private Nombre: string;
    private Apellidos: string;
    private Edad: number;
    private DNI: string;
    private Cumpleanos: string;
    private Color_Favorito: string;
    private Sexo: string;
    private Direcciones: Direccion[];
    private Mails: Mail[];
    private Telefonos: Telefono[];
    private Notas: string;

    constructor(
      C_Nombre:string, 
      C_Apellidos:string, 
      C_Edad: number, 
      C_DNI: string, 
      C_Cumpleanos: string, 
      C_Color_Favorito: string, 
      C_Sexo: string, 
      C_Direcciones: Direccion[],
      C_Mails: Mail[],
      C_Telefonos: Telefono[],
      C_Notas: string) {

      this.Nombre = C_Nombre;
      this.Apellidos = C_Apellidos;
      this.Edad = C_Edad;
      this.DNI = C_DNI;
      this.Cumpleanos = C_Cumpleanos;
      this.Color_Favorito = C_Color_Favorito;
      this.Sexo = C_Sexo;
      this.Direcciones = [];
      this.Mails = [];
      this.Telefonos = [];
      this.Notas = C_Notas;
    }

    public get C_Nombre(): string {
        return this.Nombre;
    }

    public get C_Apellidos(): string {
        return this.Apellidos;
    }

    public get C_Edad(): number {
        return this.Edad;
    }

    public get C_DNI(): string {
        return this.DNI;
    }

    public get C_Cumpleanos(): string {
        return this.Cumpleanos;
    }

    public get C_Color_Favorito(): string {
        return this.Color_Favorito;
    }

    public get C_Sexo(): string {
        return this.Sexo;
    }

    public get C_Direcciones(): Direccion[] {
        return this.Direcciones;
    }

    public set C_Direcciones(value: Direccion[]) {
        this.Direcciones = value;
    }

    public get C_Mails(): Mail[] {
        return this.Mails;
    }

    public set C_Mails(value: Mail[]) {
        this.Mails = value;
    }

    public get C_Telefonos(): Telefono[] {
        return this.Telefonos;
    }

    public set C_Telefonos(value: Telefono[]) {
        this.Telefonos = value;
    }

    public get C_Notas(): string {
        return this.Notas;
    }

    mostrarDatos(): void{
        console.log(
            this.Nombre,
            this.Apellidos,
            this.Edad,
            this.DNI,
            this.Cumpleanos,
            this.Color_Favorito,
            this.Sexo,
            this.Direcciones,
            this.Mails,
            this.Telefonos,
            this.Notas
        )
    }

    modificarRegistro(a:Direccion, b:Mail, c:Telefono): void{

        this.Direcciones.push(a);
        this.Mails.push(b);
        this.Telefonos.push(c);

    }

  }
  