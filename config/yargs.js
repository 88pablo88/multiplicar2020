

const opciones =                                          
    {base:{                                                  
        demand: true,                                       
        alias: 'b'},                                     
    limite:{
        alias: 'l',
        default: 10}            
    }

    const argv = require('yargs').command('listar', 'imprime en consola las tablas de multiplicar',  //la funcion command crea un comando para ejecutar en consola
        {                                                           //el primer argumento es el nombre del comando, el segundo la descripcio, y el tercero el obejto de argumentos a ingresar por consola   
            base:{                                                  //argumento base
                demand: true,                                       //el comando se ejecutarua node app --base 5
                alias: 'b',                                         //o con el alias node app -b 2    
            },
            limite:{
                alias: 'l',
                default: 10                }
        })
        .help()       //la funcion help es opcional para obtener ayuda del comando creado
        .command('crear', 'crea txt con las tablas de multiplicar', opciones) //tambien se puede pasar como tercer argumento un objeto almacenado en una variable o constante
        .help()       
        .argv 


        module.exports = {
            argv
        }