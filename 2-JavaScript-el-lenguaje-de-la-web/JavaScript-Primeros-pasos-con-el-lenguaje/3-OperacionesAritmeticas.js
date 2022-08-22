console.log('Operaciones aritmeticas');
const variableTexto = "variableTexto"; //La variable const permanece "constante". No puedo asignarle un nuevo valor
console.log(variableTexto);

let nuevaVariableTexto = "Valor que cambia"; //La variable let puede recibir un nuevo valor
console.log(nuevaVariableTexto);

nuevaVariableTexto = "Por otro valor";
console.log(nuevaVariableTexto);

var variableGlobal = "Varible de todo el programa"; //La variable var puede estar disponible en todo el programa o en un bloque de código
console.log(variableGlobal);

variableGlobal = "Otro valor global";
console.log(variableGlobal);

const unNumero = 10;
const numeroDecimal = 20.5;

let sumaNumeros = 0;

sumaNumeros = 2 + 2;
console.log(sumaNumeros);
sumaNumeros = 2 + 10 * 5;
console.log(sumaNumeros);
sumaNumeros = (2 + 10) * 5;
console.log(sumaNumeros);

const nombreMadre = "María";
console.log('El nombre de mi madre es:'+nombreMadre);