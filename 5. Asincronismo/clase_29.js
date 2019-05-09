const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onResponse = function(data){

	console.log(`Hola yo soy ${data.name}`) // Para ver los parámetros que recibe la funcion get()
}

$.get(lukeUrl, opts, onResponse)

//Un callback es una función que se ejecuta luego de que llega una respuesta o se cumpla algo necesario para su ejecución