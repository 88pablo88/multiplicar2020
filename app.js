const {crearArchivo} = require('./multiplicar/multiplicar')
const {listarTabla} = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv



let comando = argv._[0]   //el obejeto argv creado recibe una propiedad guion bajo " _ " cuyo valor es 
                          //un array con los distintos comandos, la primera posicion es la que queremos obtener con el [0]



switch (comando){
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo}`))
                          .catch(e=>console.log(e))
        break
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break
    default:
        console.log('comando no reconocido');    
}



console.log('el comando es: ',comando); 




//crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch(e=>console.log(e))


