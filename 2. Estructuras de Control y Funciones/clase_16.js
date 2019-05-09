var edad = prompt('¿Qué edad tienes?')

switch(edad){

	case 0: alert ("Acaba de nacer hace poco. No ha cumplido el año"); break;
	case 2: alert("Eres un niño"); break;
    case 18 : alert ("Está justo en la mayoría de edad"); break;
    case 20 : alert ("Eres muy jóven, aprovecha tu juventud."); break;
    case 65: alert ("Está en la edad de jubilación"); break;
	default: alert('Puedes decir tu edad sin ningun prejuicio')
}