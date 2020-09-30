// La siguiente librería añade colores a la consola
const colors = require('colors');

// Ya no es necesario el código que sigue ya que lo importamos desde ./config/yargs
// Simplemente lo hemos movido allí y lo importamos, pero como no queremos todo el contenido,
// sino solo la función argv, le añadimos el .argv
const argv = require('./config/yargs').argv;
// Llamamos a la libreria 'yargs'
            // require('yargs')
//     // Señalamos que el comando para enseñar los datos se llamará 'listar'
//     // con lo que tendremos que escribirlo cada vez que queramos que nos muestre algo
//     // El 2º texto «Imprime en el...» aparecerá cada vez, solo señala lo que hace la app
//     .command('listar', 'Imprime en el terminal la tabla de multiplicar', {
//         //Especificamos a 'base' que debe ser obligatorio ponerlo ('demand:true') y que 
//         // no hace falta escribir --base, con -b valdría (por eso 'alias : 'b' ').
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         //Añadimos otro valor que guardará la app, y ponemos una valor por defecto
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     //Lo mismo que hicimos para 'listar lo hacemos para 'crear'
//     .command('crear', 'Crea el documento de txt con la tabla', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     // Si queremos que nos muestre la ayuda pondremos listar --help
//     .help()
//     .argv;

// requireds 
// const fs = require('fs'); --> propio de node
// const fs = require('express'); --> instalado pero creado por otros usuarios
// const fs = require('./fs'); --> No instalado, se halla en nuestro ordenador
//La siguiente función importa las funciones del otro archivo
const { newFile, listTable } = require('./multiplicar/multiplicar');

let comando = argv._[0];

// en comando se guardan en un array (en argv) todas las palabras que usamos por orden
// por lo que al usar una si buscamos en la primera posición podemos admitir o negar la palabra usada
switch (comando) {

    case 'listar':
        listTable(argv.base, argv.limite);
        break;
    // Con crear usamos la funcion que genera el archivo, así cuando se use la palabra crear
    // la app generará el archivo deseado
    case 'crear':
        // arg.base contiene ahora el número
        newFile(argv.base, argv.limite)
            .then(file => console.log(`File created: ${file}`))
            .catch(e => console.log(e.red));
        break;

    default:
        console.log(`Comando no reconocido`.red)
        break;
}

// let base = '5';

// process es una función que no hay que declarar, que muestra una cantidad ingente
//de información a la que podemos acceder.
// Un ejemplo para acceder sería process.argv , donde argv es un array que muestra:
// argv[0]= ruta de instalación de node
// argv[1]= ruta de acceso al archivo js desde el que trabajas.
// pudiendo añadir valores a argv podemos de forma burda meter información desde el 
// terminal sin ir cambiando el dato de 'base' desde el archivo


// let argv = process.argv[2].split('=')[1];
// Dado que en la consola escribimos --base=8, separo con split por el = y cojo el 2º elemento

// ¿Podría escribir directamente 8?
// let argv2 = process.argv
// [2];
// Efectivamente no hay necesidad de escribir --base=
// Lo que si parece ser necesario es añadir el valor a argv desde la carpeta que contiene el archivo
// a través de `node ${nombre del archivo} ${nº que se desea}`. Luego accedemos con process.argv[2]

// console.log(argv);

// console.log(argv.base);
// console.log('Limite', argv.limite);