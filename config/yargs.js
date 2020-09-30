
const opt ={
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }    
}
// Dado que el contenido de 'opt' se repetía, es más inteligente gusardarlo una vez en una 
// const y que el se llame a la variable

const argv = require('yargs')
    .command('listar', 'Imprime en el terminal la tabla de multiplicar', opt)
    .command('crear', 'Crea el documento de txt con la tabla', opt)
    .help()
    .argv;

module.exports = {
    argv
}