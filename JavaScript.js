// Variables
    var snake_case = "Variable global, modificable";
    let camelCase = "Variable local (no se puede acceder desde ramas externas), modificable";
    const kebahcase = "Variable global, inmodificable";

// Tipos de Dato
    let number = 0; // Numeros enteros, negativos y decimales
    let string = "asd"; // Cadena de texto entre comillas
    let boolean = true; // Verdadero (true) o Falso (false)
    let object = {
    propiedad1: "valor",
    propiedad2: true
    }
    let array = [indice0, indice1, indice2]; // Tipo de objeto. Conjunto de valores de cualquier tipo


// Operadores 
    let asignacion = "=" // Usado para asignarle valor a una variable

    // Operadores aritméticos
    let aritmeticos = { // Realiza operaciones entre valores de tipo number
        suma: "+",
        resta: "-",
        multiplicacion: "*",
        division: "/",
        modulo: "%", // Devuelve el resto de la división ( 5 % 8 = 3 )
        incremento: "++", // Suma 1
        decremento: "--" // Resta 1
        }

    // Operadores de comparación
    let comparacion = { // Compara dos valores y devuelve un valor booleano
        igual: "==",
        estrictamenteIgual: "===",
        desigual: "!=",
        estrictamenteDesigual: "!==",
        mayorQue: ">",
        mayorOIgualQue: ">=",
        menorQue: "<",
        menorOIgualQue: "<="
        }   

    // Operadores lógicos
    let logicos = { // Compara dos valores booleanos (u operadores de comparación) entre si
        and: "&&", // Compara si ambas declaraciones son verdaderas y envía true
        or: "||" // Compara si al menos una declaración es verdadera y envía true
        }

    // Operadores de negación y concatenación
    let otros = {
        negacion: "!", // Invierte el valor booleano
        concatenacion: "+" // Une dos cadenas de texto
        }

// Funciones -> Listado de procedimientos a ejecutar cuando sean invocados
    // Función declarada:
    function funcionDeclarada(parametro)
        {
        return "Código a ejecutar"
        }

    // Función expresada:
    let funcionExpresada = function(parametro)
        {
        return "Código a ejecutar"
        }

    // Arrow Function:
    let arrowFunction = parametro => console.log("Código a ejecutar");
    let arrowFunction2 = (parametro1, parametro2) => console.log("Código a ejecutar");

// Condicional If
    if(condicion > boolean)
    {
        return "código a ejecutar si se cumplió la condición"
    } 
    else if(condicion2 > boolean)
    {
        return "código a ejecutar si se cumplió la condición"
    }
    else{ return "código a ejecutar si no se cumplió ninguna condición"}

// If ternario
    condicion ? console.log("Código a ejecutar si la condicion es verdadera") : console.log("Código a ejecutar si la condición es falsa");

// Condicional Switch case
    switch (expresión)
    {
        case valor1:
            return "Código a ejecutar si el 'valor1' es igual que la expresión"
            break; // Corta el código y frena el switch, necesario para que finalice y el programa continue
        case valor2:
            return "Código a ejecutar si el 'valor2' es igual que la expresión"
            break; // Corta el código y frena el switch, necesario para que finalice y el programa continue
    }

// Bucle For
    for (parametroinicial ; condicion ; modificador)
    {
        // Parametro inicial: establece parametro inicial para el bucle (generalmente es "let i = 0"), es opcional.
        // Condición: establece el límite del bucle, un punto final. Es opcional declararlo aquí pero es necesario que esté en algún lado del bucle.
        // Modificador: modifica el parámetro inicial (generalmente es "i++"), es opcional declararlo aquí, pero se sugiere que esté presente en el bucle para detenerlo.
        console.log("Código a ejecutar en cada vuelta del bucle"); 
    }

// Propiedades de Array
    let length = array.length; // Devuelve la longitud del array (cantidad de valores ingresados)
    let push = array.push("Elemento a agregar"); // Agrega el argumento al final del array
    let unshift = array.unshift("Elemento a agregar"); // Agrega el argumento al inicio del array
    let pop = array.pop(); // Elimina el último elemento del array
    let shift = array.shift(); // Elimina el primer elemento del array
    let indexOf = array.indexOf("Elemento a buscar"); // Busca el argumento dentro del array (desde el inicio) y devuelve su índice (o -1 si no está)
    let lastIndexOf = array.lastIndexOf("Elemento a buscar"); // Busca el argumento dentro del array (desde el final) y devuelve su índice (o -1 si no está)
    let includes = array.includes("Elemento a buscar"); // Busca el argumento y devuelve un booleano en función de si lo encuentra o no
    let join = array.join(", "); // Crea un string con los elementos del array, separandolos con el argumento
    let map = array.map(funcion(parametro),{ codigo }); // Recorre el array y crea otro realizandole modificaciones
    let reduce = array.reduce(funcion(acumulador, elemento),{codigo}); // Recorre el array y devuelve un unico valor realizandole modificaciones, con un acumulador adicional

// Propiedades de String
    let stringLength = string.length; // Devuelve la longitud del string en caracteres
    let stringIndexOf = string.indexOf("Texto a buscar"); // Busca el argumento y devuelve el primer índice donde lo encontró, o -1 si no se encuentra
    let slice = string.slice("primer indice", "segundo indice (opcional)"); // Corta el string entre los indices indicados (o desde el indicado hasta el final, en caso de indicar uno solo)
    let trim = string.trim(); // Elimina los espacios del inicio y el final del string
    let split = string.split(" "); // Separa un string en un array, teniendo en cuenta las veces que encuentre el argumento
    let replace = string.replace("Texto a buscar", "Texto a reemplazar"); // Busca el primer argumento en el string y reemplaza todas las veces que lo encuentre por el segundo argumento

