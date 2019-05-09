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

async function obtenerPersonajes() {//Para usar async-await

  var ids = [1, 2, 3, 4, 5, 6, 7]
  var promesas = ids.map(id => obtenerPersonaje(id))//Convertimos el arreglo de ids en otro de promesas
  try{

    var personajes = await Promise.all(promesas)
    console.table(personajes)
  }catch{

    onError(id)
  }

}

obtenerPersonajes()
