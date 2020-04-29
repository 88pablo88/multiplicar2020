const fs = require ('fs');
const colors = require('colors')

const listarTabla = (base, limite)=>{
    for(let i = 1; i < limite; i++){
        console.log(`${i} * ${base} = ${i*base}`);
    }
}


const crearArchivo = (base, limite)=>{

    console.log('Creando archivo de tabla'.blue);

    let contenido = ''

    return new Promise((resolve, reject)=>{

    if(!Number(base)){
        reject('No es un numero')
        return
    }


        for(let i = 1; i < limite; i++){
            contenido += `${i} * ${base} = ${i*base}\n`
        } 
        
        
        
        fs.writeFile(`./tablas/tabla ${base}.txt`, contenido, (err) => {

            if (err) 
                reject(err);
            else
                resolve(`tabla ${base}.txt`)

          });

        }

    )

}


module.exports = {
    crearArchivo,
    listarTabla
}
