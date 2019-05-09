const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {

    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    //Invocamos al callback
    $.get(URL, opts, function(data) {

        console.log(`Hola yo soy ${data.name}`) // Para ver los parámetros que recibe la funcion get()

        if (callback) {

        	callback()
        }
    })
}

/*Invocamos a obtenerPersonaje como callback en una 
función anonima para que no se ejecute enseguida sino 
cuando se le hemos indicado, de esta manera podemos controlar
la ejecución de nuestro programa pese al asincronismo de JavaScript*/
obtenerPersonaje(1, function() {

    obtenerPersonaje(2, function() {
        obtenerPersonaje(3, function() {
            obtenerPersonaje(4, function() {
                obtenerPersonaje(5, function() {
                    obtenerPersonaje(6, function() {
                        obtenerPersonaje(7, function() {
                            obtenerPersonaje(8)
                        })
                    })
                })
            })
        })
    })
})
//Aca se esta generando un hellCallback 
//1-Luke Skywalker
//2-C3-PO
//3-R2-D2

/*
Debido al asincronismo con que trabaja JavaScript no es
posible saber en que orden llegaran las respuestas solicitadas
al servidor, todo va a depender del mismo, en otras palabras, el
un orden de instrucciones (de peticiones) no implica que las respuestas llegaran en el
mismo orden.
*/
//Un callback es una función que se ejecuta luego de que llega una respuesta o se cumpla algo necesario para su ejecución