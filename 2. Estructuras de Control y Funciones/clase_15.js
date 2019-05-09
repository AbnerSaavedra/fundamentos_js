var contador = 0

const llueve = () => Math.random() < 0.25

/*function llueve(){
var random = Math.random()
	if (random < 0.25) 
	return true
}*/

do{

	contador++

} while(!llueve())


if (contador === 1) {

	console.log(`Fuí a ver si llovía ${contador} vez`)

}else{

	console.log(`Fuí a ver si llovía ${contador} veces`)

}