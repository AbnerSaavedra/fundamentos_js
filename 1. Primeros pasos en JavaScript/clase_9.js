var x = 4,
    y = '4'

/* Las comparaciones de objetos en JavaScript es diferente, dado que no se considera solo la igualda de tipo y de valor
sino también la referencia que tengan estos en la memoria volatil */

var abner = {

    nombre: 'Abner'
}

var otraPersona = {

    nombre: 'Abner'
}

var variable1;

/*otrapersona = {

	...abner // Se crea una copia de Abner que logicamente es creada en otra posición de memoria
}*/

function compararObjetos(objeto) {

    otrapersona = {

        ...objeto // Se crea una copia de Abner que logicamente es creada en otra posición de memoria
    }

    if (otrapersona === objeto) {

        console.log('Son iguales')
    } else {

        console.log('No son iguales')
    }
}
/*Así que si comparamos abner === otrapersona dara false debido a que ambos objetos
hacen referencia a diferentes direcciones de memoria */

/* Para lograr una comparación exitosa de obejetos en JavaScript estos deben apuntar o
hacer referencia a la misma dirección o espacio de memoria */
//Por ejemplo:

otraPersona = abner