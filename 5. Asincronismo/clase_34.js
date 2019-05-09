const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

//Ya no recibirá un callback como parametro sino que retornará una promesa.
function obtenerPersonaje(id) {

    return new Promise((resolve, reject) => {
    
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(URL, opts, function(data){

        resolve(data)
    })

    .fail( () => reject(id)) //Si ocurre algún error el metodo fail con su callback se ejecuta
    })
}

const onError = (id) =>
    console.log(`Ocurrío un error al obtener el personaje ${id}`) 

obtenerPersonaje(1)
    .then((data)=> {

        console.log(`Hola yo soy ${data.name}`) 
        return obtenerPersonaje(2)
    })
    .then((data)=> {

        console.log(`Hola yo soy ${data.name}`) 
        return obtenerPersonaje(3)
    })
    .then((data)=> {

        console.log(`Hola yo soy ${data.name}`) 
        return obtenerPersonaje(4)
    })
    .then((data)=> {

        console.log(`Hola yo soy ${data.name}`) 
        return obtenerPersonaje(5)
    })
    .catch(onError)

