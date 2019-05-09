var abner = {

    nombre: 'Abner',
    apellido: 'Saavedra',
    edad: 27,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: true,
    drone: false
}

var isaias = {

    nombre: 'Isaías',
    apellido: 'Hernández',
    edad: 13
}

/*Función que imprime si una persona es mayor de edad
ó no*/

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

const imprimirSiEsMenorDeEdad = ({edad}) => !esMayorDeEdad({edad}) 

console.log(`${persona.nombre} es menor de edad.`)