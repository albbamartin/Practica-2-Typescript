import {Persona} from "./Persona";
import {Direccion} from "./Direccion";
import {Mail} from "./Mail";
import {Telefono} from "./Telefono";

var persona1 = new Persona("Nombre1",
                            "Apellidos1",
                            20,
                            "DNI1",
                            "1999/01/01",
                            "Rojo",
                            "Masculino",
                            [new Direccion("Calle", 1, 1, "A", "123", "Pob", "Prov")],
                            [new Mail("Personal", "mail@mail.com")],
                            [new Telefono("Personal", 5555)],
                            "Nota");

persona1.mostrarDatos();

var persona2 = new Persona("Nombre2",
                            "Apellidos1",
                            20,
                            "DNI2",
                            "1999/01/01",
                            "Rojo",
                            "Masculino",
                            [new Direccion("Calle", 1, 1, "A", "123", "Pob", "Prov")],
                            [new Mail("Personal", "mail@mail.com")],
                            [new Telefono("Personal", 5555)],
                            "Nota");

persona2.mostrarDatos();

var persona3 = new Persona("Nombre3",
                            "Apellidos1",
                            20,
                            "DNI3",
                            "1999/01/01",
                            "Rojo",
                            "Masculino",
                            [new Direccion("Calle", 1, 1, "A", "123", "Pob", "Prov")],
                            [new Mail("Personal", "mail@mail.com")],
                            [new Telefono("Personal", 5555)],
                            "Nota");

persona3.mostrarDatos();

for(let a of [persona1, persona2, persona3]){
    if(a.C_DNI == "DNI2"){
            
            a.modificarRegistro(new Direccion("Calle", 1, 1, "A", "123", "Pob", "Prov"),
                                new Mail("Personal", "mail@mail.com"),
                                new Telefono("Personal", 5555),);
    }
    console.log(a)
}
    
